/*
** Generates src/assets/img/topo.svg, the faint topographic contour texture
** used as the site background. Builds a seeded height field (a few hills plus
** noise), traces contour lines with marching squares, and writes smoothed paths.
**
** Usage: node scripts/generate-topo.js [seed]
*/
const fs = require('fs');
const path = require('path');

const WIDTH = 1600;
const HEIGHT = 1000;
const CELL = 8;
const LEVELS = 18;
const SEED = Number(process.argv[2]) || 1977;
const OUT = path.join(__dirname, '../src/assets/img/topo.svg');

// Seeded PRNG (mulberry32) so the output is reproducible
function rng(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rand = rng(SEED);

// Smooth value noise for irregular ridgelines
const NOISE_SIZE = 64;
const lattice = Array.from({ length: NOISE_SIZE * NOISE_SIZE }, rand);
function noise(x, y) {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const fx = x - xi;
  const fy = y - yi;
  const at = (i, j) => lattice[((j & 63) * NOISE_SIZE) + (i & 63)];
  const sx = fx * fx * (3 - 2 * fx);
  const sy = fy * fy * (3 - 2 * fy);
  const top = at(xi, yi) + (at(xi + 1, yi) - at(xi, yi)) * sx;
  const bottom = at(xi, yi + 1) + (at(xi + 1, yi + 1) - at(xi, yi + 1)) * sx;
  return top + (bottom - top) * sy;
}

const hills = Array.from({ length: 7 }, () => ({
  x: rand() * WIDTH,
  y: rand() * HEIGHT,
  r: 180 + rand() * 260,
  h: 0.5 + rand() * 0.8,
}));

function height(x, y) {
  let v = 0;
  for (const hill of hills) {
    const d2 = (x - hill.x) ** 2 + (y - hill.y) ** 2;
    v += hill.h * Math.exp(-d2 / (2 * hill.r * hill.r));
  }
  v += 0.35 * noise(x / 220, y / 220) + 0.12 * noise(x / 90 + 17, y / 90 + 5);
  return v;
}

// Sample the field
const cols = WIDTH / CELL + 1;
const rows = HEIGHT / CELL + 1;
const field = [];
let min = Infinity;
let max = -Infinity;
for (let j = 0; j < rows; j++) {
  for (let i = 0; i < cols; i++) {
    const v = height(i * CELL, j * CELL);
    field.push(v);
    min = Math.min(min, v);
    max = Math.max(max, v);
  }
}
const f = (i, j) => field[j * cols + i];

// Marching squares: one level -> list of segments
function segmentsFor(level) {
  const segs = [];
  const lerp = (a, b, va, vb) => a + (b - a) * ((level - va) / (vb - va));
  for (let j = 0; j < rows - 1; j++) {
    for (let i = 0; i < cols - 1; i++) {
      const a = f(i, j);
      const b = f(i + 1, j);
      const c = f(i + 1, j + 1);
      const d = f(i, j + 1);
      const x = i * CELL;
      const y = j * CELL;
      const top = [lerp(x, x + CELL, a, b), y];
      const right = [x + CELL, lerp(y, y + CELL, b, c)];
      const bottom = [lerp(x, x + CELL, d, c), y + CELL];
      const left = [x, lerp(y, y + CELL, a, d)];
      const idx = (a > level ? 8 : 0) | (b > level ? 4 : 0) | (c > level ? 2 : 0) | (d > level ? 1 : 0);
      switch (idx) {
        case 1: case 14: segs.push([left, bottom]); break;
        case 2: case 13: segs.push([bottom, right]); break;
        case 3: case 12: segs.push([left, right]); break;
        case 4: case 11: segs.push([top, right]); break;
        case 6: case 9: segs.push([top, bottom]); break;
        case 7: case 8: segs.push([left, top]); break;
        case 5: segs.push([left, top], [bottom, right]); break;
        case 10: segs.push([top, right], [left, bottom]); break;
        default: break;
      }
    }
  }
  return segs;
}

// Join segments that share endpoints into polylines
function join(segs) {
  const key = (p) => `${p[0].toFixed(2)},${p[1].toFixed(2)}`;
  const byPoint = new Map();
  segs.forEach((s, n) => {
    for (const p of s) {
      const k = key(p);
      if (!byPoint.has(k)) byPoint.set(k, []);
      byPoint.get(k).push(n);
    }
  });
  const used = new Set();
  const lines = [];
  const extend = (line, atEnd) => {
    for (;;) {
      const tip = atEnd ? line[line.length - 1] : line[0];
      const next = (byPoint.get(key(tip)) || []).find((n) => !used.has(n));
      if (next === undefined) return;
      used.add(next);
      const [p, q] = segs[next];
      const other = key(p) === key(tip) ? q : p;
      if (atEnd) line.push(other);
      else line.unshift(other);
    }
  };
  segs.forEach((s, n) => {
    if (used.has(n)) return;
    used.add(n);
    const line = [s[0], s[1]];
    extend(line, true);
    extend(line, false);
    lines.push(line);
  });
  return lines;
}

// Smooth polyline into a path of quadratic curves through segment midpoints
function toPath(pts) {
  if (pts.length < 4) return '';
  const r = (n) => Math.round(n * 10) / 10;
  const mid = (p, q) => [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2];
  let d = `M${r(pts[0][0])} ${r(pts[0][1])}`;
  for (let k = 1; k < pts.length - 1; k += 2) {
    const m = mid(pts[k], pts[k + 1]);
    d += `Q${r(pts[k][0])} ${r(pts[k][1])} ${r(m[0])} ${r(m[1])}`;
  }
  const last = pts[pts.length - 1];
  d += `L${r(last[0])} ${r(last[1])}`;
  return d;
}

const minor = [];
const index = [];
for (let n = 1; n <= LEVELS; n++) {
  const level = min + ((max - min) * n) / (LEVELS + 1);
  const d = join(segmentsFor(level)).map(toPath).filter(Boolean).join('');
  (n % 5 === 0 ? index : minor).push(d);
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${WIDTH} ${HEIGHT}" preserveAspectRatio="xMidYMid slice">
<g fill="none" stroke="#4a3426" stroke-linecap="round" stroke-linejoin="round">
<path stroke-width="1.2" d="${minor.join('')}"/>
<path stroke-width="2.4" d="${index.join('')}"/>
</g>
</svg>
`;

fs.writeFileSync(OUT, svg);
console.log(`Wrote ${path.relative(process.cwd(), OUT)} (${(svg.length / 1024).toFixed(1)} KB, seed ${SEED})`);
