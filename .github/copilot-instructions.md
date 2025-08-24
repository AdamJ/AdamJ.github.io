# Portfolio Site - Adam Jolicoeur (Eleventy)

This is Adam Jolicoeur's portfolio website built with Eleventy (11ty), Node.js, Bootstrap, and Sass. The site showcases UX/UI design work, development projects, and professional content.

**Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Working Effectively

### Environment Setup
- **Node.js Required**: Version 22 (specified in package.json), but builds successfully with Node.js 20+. NEVER CANCEL builds due to version warnings.
- Check Node.js version: `node --version` 
- Install dependencies: `npm install` -- Takes 60 seconds. NEVER CANCEL. Set timeout to 120+ seconds.
- The project uses npm (not yarn or pnpm) for dependency management.

### Build Process (CRITICAL TIMINGS)
Bootstrap and build the site with these commands in sequence:

1. **Clean build directory**: `npm run clean` -- Removes `docs/` directory (~1 second)
2. **Optimize images**: `npm run images:optimize` -- Processes images in `src/assets/img-raw/` using Sharp. Takes 14 seconds. NEVER CANCEL. Set timeout to 60+ seconds.
3. **Compile Sass**: `npm run build:sass` -- Compiles SCSS to CSS with Bootstrap. Takes 2 seconds. NEVER CANCEL. Expect Sass deprecation warnings (harmless).
4. **Generate site**: `npm run build:eleventy` -- Static site generation. Takes 2 seconds. NEVER CANCEL.
5. **PostCSS processing**: `npm run postbuild` -- Autoprefixer and minification. Runs automatically after build.

**Complete build**: `npm run build` -- Runs all above steps. Takes 20 seconds total. NEVER CANCEL. Set timeout to 120+ seconds.

### Development Server
- **Start development**: `npm run start` -- Starts file watching, BrowserSync, and live reload. NEVER CANCEL.
- **Development URL**: http://localhost:8081 (NOT the default 8080)
- File watching monitors: `src/sass/*.scss` for styles, all Eleventy source files for content
- **Live reload**: Changes to source files automatically rebuild and refresh browser
- **Stop development**: Ctrl+C to stop all watchers

### Linting and Validation
- **Stylelint**: `npm run lint` -- Checks Sass/SCSS files. Expect 176+ linting errors (non-blocking, legacy issues). Takes 5 seconds.
- **Auto-fix styles**: `npm run lint:fix` -- Attempts to fix Stylelint issues automatically
- **Web performance**: `npm run webhint` -- Accessibility and performance testing against localhost:8081. Expect errors/warnings (non-blocking). Takes 30 seconds.
- **ALWAYS run linting before committing changes** -- CI will fail if you introduce new linting errors

## Validation Scenarios

After making changes, ALWAYS manually validate the site with these scenarios:

### CRITICAL: Test Complete User Scenarios
1. **Home page navigation**: 
   - Visit http://localhost:8081
   - Navigate through main menu items (About, Designs, Development, etc.)
   - Verify portfolio cards load with images
   - Test responsive behavior (resize browser)

2. **Design portfolio validation**:
   - Navigate to http://localhost:8081/designs/
   - Click on design case studies (Task-It, ALM, Customer Engagement)
   - Verify images load correctly in case study pages
   - Test image comparison sliders (if present)

3. **Development showcase**:
   - Visit http://localhost:8081/development/
   - Test external links to GitHub, NPM, CodePen
   - Verify prototype embeds and code examples display correctly

4. **Contact and social links**:
   - Test contact form functionality (if present)
   - Verify social media links work (GitHub, LinkedIn, Bluesky)

### Quick Validation Commands
```bash
# Verify site builds and serves
npm run build && npm run start &
curl -I http://localhost:8081  # Should return 200 OK

# Check build outputs exist
ls -la docs/css/style.css      # Main CSS file (~98KB)
ls -la docs/assets/img/ | wc -l # Should show 650+ optimized images

# Test key pages respond
curl -s -o /dev/null -w "%{http_code}" http://localhost:8081/         # 200
curl -s -o /dev/null -w "%{http_code}" http://localhost:8081/designs/ # 200
curl -s -o /dev/null -w "%{http_code}" http://localhost:8081/development/ # 200

# Count internal links (should be 800+)
grep -r "href=\"/" docs/ | wc -l
```

## Codebase Structure

### Key Directories and Files
- **`src/`** -- All source content and assets
  - `src/pages/` -- Markdown pages for main site content  
  - `src/posts/` -- Blog posts (ignored in production builds)
  - `src/_data/meta.js` -- Site metadata and configuration
  - `src/_includes/` -- Nunjucks templates and partials
  - `src/assets/img/` -- Processed/optimized images (generated)
  - `src/assets/img-raw/` -- Original high-resolution images for processing
  - `src/sass/` -- SCSS stylesheets (Bootstrap + custom styles)
  - `src/js/` -- JavaScript files (passed through to output)

- **`docs/`** -- Generated output directory (DO NOT EDIT - gets deleted on build)
- **`.eleventy.js`** -- Eleventy configuration file
- **`scripts/image-optimizer.js`** -- Custom image processing with Sharp
- **`.github/workflows/eleventy_build.yml`** -- CI/CD pipeline

### Template System
- **Nunjucks** for templating (`.njk` files)
- **Liquid** for Markdown front matter processing  
- **Bootstrap 5** grid system and components
- **Custom Sass** in `src/sass/` for styling

### Important Configuration
- **Input directory**: `src/`
- **Output directory**: `docs/` (required for GitHub Pages)
- **Development port**: 8081 (configured in package.json)
- **Production builds**: `ELEVENTY_ENV=prod` (excludes posts)
- **Development builds**: `ELEVENTY_ENV=dev` (includes posts)

## Common Tasks

### Working with Content
- **Add new page**: Create `.md` file in `src/pages/` with YAML front matter
- **Modify navigation**: Edit `eleventyNavigation` in page front matter
- **Update site metadata**: Modify `src/_data/meta.js`
- **Add new case study**: Create subfolder in `src/pages/designs/` 

### Working with Styles
- **Main stylesheet**: `src/sass/style.scss` (imports Bootstrap + custom partials)
- **Color variables**: `src/sass/_colors.scss`
- **Typography**: `src/sass/_typography.scss`
- **Component styles**: Individual `_component.scss` files
- **Build CSS**: Styles automatically compile with `npm run start` or `npm run build`

### Working with Images  
- **Add new images**: Place originals in `src/assets/img-raw/`
- **Image processing**: Run `npm run images:optimize` to generate WebP + JPEG versions
- **Generated images**: Output to `src/assets/img/` (committed to repo)
- **Image formats**: WebP for modern browsers, JPEG fallbacks
- **Image sizes**: 1200px max width for full size, 300px for thumbnails

### Testing Changes
- **Never skip manual validation** -- Build success doesn't guarantee site functionality
- **Always test responsive behavior** -- Design work requires mobile testing
- **Verify external links** -- Portfolio site has many outbound links to projects
- **Check image optimization** -- Portfolio is image-heavy, optimization is critical

## CI/CD Pipeline

The GitHub Actions workflow (`.github/workflows/eleventy_build.yml`):
- **Triggers**: Push to `main` branch
- **Node.js**: 22.x in CI environment  
- **Build steps**: `npm ci`, `npm run build`
- **Deployment**: Publishes `docs/` to `gh-pages` branch
- **Live site**: Deploys to GitHub Pages automatically

### Build Warnings (Expected and Safe)
- **Node version warnings**: Package requires Node 22, runs fine on 20+ (ignore EBADENGINE warnings)
- **npm audit vulnerabilities**: 74+ vulnerabilities in dependencies (non-critical for static site)
- **Sass deprecation warnings**: Bootstrap uses deprecated @import syntax (144 warnings expected, safe to ignore)
- **External resource loading**: Fonts, CDN resources may fail to load in sandboxed environments (site still functions)
- **Stylelint errors**: 176+ errors from legacy code (doesn't break build, can be fixed with `npm run lint:fix`)
- **Webhint errors**: 245+ errors and 264+ warnings expected (accessibility/compatibility issues, non-blocking)

## Troubleshooting

### Common Issues
- **Build hangs during image optimization**: Check `src/assets/img-raw/` has valid image files
- **Port 8081 already in use**: Kill existing process or use different port
- **Missing Sharp module**: Run `npm install` again, Sharp is CPU architecture specific
- **CSS not updating**: Clear browser cache, check Sass compilation warnings
- **404 on navigation**: Verify Eleventy generated corresponding HTML files in `docs/`

### Recovery Commands
```bash
# Nuclear option - clean restart
npm run clean
rm -rf node_modules
npm install
npm run build

# Check build output
ls -la docs/
ls -la docs/css/
ls -la docs/assets/img/

# Verify server response  
curl -v http://localhost:8081/
```

### Getting Help
- **Eleventy docs**: https://www.11ty.dev/docs/
- **Bootstrap docs**: https://getbootstrap.com/docs/5.3/
- **Sass/SCSS reference**: https://sass-lang.com/documentation/
- **Sharp image processing**: https://sharp.pixelplumbing.com/