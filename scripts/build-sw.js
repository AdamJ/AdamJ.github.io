const { copyWorkboxLibraries, injectManifest } = require('workbox-build');
const fs = require('fs');
const path = require('path');

async function buildSW() {
  const workboxDir = await copyWorkboxLibraries('docs');

  const swSource = fs.readFileSync('src/sw.js', 'utf8');
  const swPatched = swSource.replace(
    /importScripts\(\s*['"]https:\/\/storage\.googleapis\.com\/workbox-cdn\/releases\/[\d.]+\/workbox-sw\.js['"]\s*\)/,
    `importScripts('/${workboxDir}/workbox-sw.js')`
  );

  const tmpPath = 'src/sw-build-tmp.js';
  fs.writeFileSync(tmpPath, swPatched);

  try {
    const { count } = await injectManifest({
      swSrc: tmpPath,
      swDest: 'docs/sw.js',
      globDirectory: 'docs',
      globPatterns: ['**/*.{html,css,js,png,jpg,webp,ico,txt,xml,woff2}'],
      globIgnores: ['workbox-*/**', 'sw.js'],
    });
    console.log(`Service worker built. ${count} files precached.`);
  } finally {
    fs.unlinkSync(tmpPath);
  }
}

buildSW().catch((err) => {
  console.error('SW build failed:', err);
  process.exit(1);
});
