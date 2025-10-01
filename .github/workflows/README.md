# GitHub Actions Workflows

This directory contains the automated build and deployment workflows for the portfolio site.

## Build and Deploy Workflow (`eleventy_build.yml`)

### Overview
Automates the build and deployment process for GitHub Pages using Eleventy static site generator.

### Triggers
- **Push to main branch**: Builds and deploys to GitHub Pages
- **Pull requests to main**: Builds only (for validation, no deployment)

### Jobs

#### Build Job
1. **Checkout repository**: Gets the latest code
2. **Setup Node.js**: Installs Node.js 22 with npm caching
3. **Install dependencies**: Runs `npm ci --ignore-scripts`
4. **Build site**: Executes `npm run build` which:
   - Cleans previous build (`docs/` folder)
   - Optimizes images from `src/assets/img-raw/`
   - Compiles Sass to CSS with Bootstrap
   - Generates static site with Eleventy
   - Processes CSS with PostCSS (autoprefixer, minification)
5. **Upload artifacts**: Saves build output for deployment job

#### Deploy Job (main branch only)
1. **Download artifacts**: Gets build output from build job
2. **Deploy to GitHub Pages**: Uses `peaceiris/actions-gh-pages` to:
   - Push `docs/` content to `gh-pages` branch
   - Update GitHub Pages deployment

### Output
- **Generated files**: ~724 static files in `docs/` directory
- **Total size**: ~42MB of optimized content
- **Deployment target**: `gh-pages` branch → GitHub Pages

### Dependencies
- **Node.js**: Version 22 (specified in package.json)
- **Build tools**: Eleventy, Sass, PostCSS, Sharp (image optimization)
- **Deployment**: GitHub Pages via gh-pages branch

### Expected Warnings
- **Sass deprecation warnings**: 144+ warnings from Bootstrap (safe to ignore)
- **npm vulnerabilities**: 74+ audit warnings (non-critical for static site)
- **Node version warnings**: Package requires Node 22, runs on 20+ (safe to ignore)

### Local Development
To run the same build process locally:
```bash
npm install
npm run build       # Production build
npm run start       # Development server with watch
```

### Configuration Files
- **Eleventy config**: `.eleventy.js` (input: `src/`, output: `docs/`)
- **Package scripts**: `package.json` (build commands)
- **Deploy key**: `ACTIONS_DEPLOY_KEY` secret (for gh-pages push)