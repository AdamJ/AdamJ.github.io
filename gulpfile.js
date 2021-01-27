(() => {
    'use-strict';
    const
  
      // development or production
      devBuild = ((process.env.NODE_ENV || 'development').trim().toLowerCase() === 'development'),
  
      // directory locations
      dir = {
        src    : './',
      },

    // modules
    gulp              =  require('gulp'),
    autoprefixer      =  require('autoprefixer'),
    noop              =  require('gulp-noop'),
    size              =  require('gulp-size'),
    sass              =  require('gulp-sass'),
    postcss           =  require('gulp-postcss'),
    header            =  require('gulp-header'),
    pkg               =  require('./package.json'),
    sourcemaps        =  devBuild ? require('gulp-sourcemaps') : null,
    browserSync       =  devBuild ? require('browser-sync') : null,

    // Set the banner content
    banner = ['/*!\n',
    ' * <%= pkg.title %> <%=(pkg.homepage) %> | v<%= pkg.version %>\n',
    ' * Copyright 2008-2021 | <%= pkg.title %>\n',
    ' * Licensed under <%= pkg.license %> | (<%= pkg.licenseUrl %>)\n',
    ' */\n',
    ''
    ].join('');

    console.log('Gulp', devBuild ? 'development' : 'production', 'build');

    const cssConfig = {

      dev         : dir.src + 'sass/**/*.scss',
      build       : dir.src + 'css',

      sassOpts: {
        sourceMap       : devBuild,
        outputStyle     : 'nested',
        precision       : 3,
        errLogToConsole : true
      }
    };

    const jsConfig = {
      dev         : dir.src + 'js/*.js'
    };

    if (!devBuild) {
      cssConfig.postCSS.push(
        require('usedcss')({ html: ['index.html'] }),
        require('cssnano')
      );
    }

    sass.compiler = require('node-sass');

    // convert custom scss files to css using PostCSS
    // @ts-ignore
    function cssDev(cb) {
      return gulp.src(cssConfig.dev)
      .pipe(sourcemaps ? sourcemaps.init() : noop())
      .pipe(sass(cssConfig.sassOpts).on('error', sass.logError))
      .pipe(postcss([ autoprefixer() ]))
      .pipe(sourcemaps ? sourcemaps.write() : noop())
      .pipe(size({ showFiles:true }))
      .pipe(header(banner, { pkg: pkg }))
      .pipe(gulp.dest(cssConfig.build))
      .pipe(browserSync ? browserSync.reload({ stream: true }) : noop());
    }

    // compile custom javascript file
    function jsDev(cb) {
      return gulp.src(jsConfig.dev)
      .pipe(header(banner, { pkg: pkg }))
      .pipe(gulp.dest('js'))
      .pipe(browserSync.reload({
        stream: true
      }));
    }

    // Configure the browserSync task
    function watchCSS(cb) {
      gulp.watch(cssConfig.dev, cssDev);
      // browserSync.reload();
    }

    function watchJS(cb) {
      gulp.watch(jsConfig.dev, jsDev);
      // browserSync.reload();
    }

    function browserSyncReload(cb) {
      browserSync.reload();
    }

    function browserSyncInit(cb) {
      browserSync.init({
        server: {
          baseDir: "./"
        },
        ui: {
          port: 8001 // customize port for browserSync UI
        },
        port: 8080, // use 8080 to prevent conflicts with other localhosts
        reloadOnRestart: true,
        notify: false // prevent the browserSync notification from appearing
      });
    }

    function htmlWatch(cb) {
      gulp.watch('*.html').on('change', browserSync.reload);
    }

    exports.cssDev            = cssDev;
    exports.jsDev             = jsDev;
    exports.htmlWatch         = htmlWatch;
    exports.browserSyncInit   = browserSyncInit;
    exports.browserSyncReload = browserSyncReload;

    exports.serve = gulp.series(
      gulp.parallel(browserSyncInit, watchCSS, watchJS),
      htmlWatch,
      browserSyncReload
    );

    exports.default = gulp.series(
      cssDev,
      jsDev
    );

})();