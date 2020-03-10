(() => {
  'use-strict';
  const

    // development or production
    devBuild = ((process.env.NODE_ENV || 'development').trim().toLowerCase() === 'development'),

    // directory locations
    dir = {
      src    : './',
      dev    : './dev/',
      build  : './dist/',
      node   : './node_modules/'
    },

    // modules
    gulp              =  require('gulp'),
    autoprefixer      =  require('autoprefixer'),
    del               =  require('del'),
    noop              =  require('gulp-noop'),
    newer             =  require('gulp-newer'),
    size              =  require('gulp-size'),
    imagemin          =  require('gulp-imagemin'),
    sass              =  require('gulp-sass'),
    postcss           =  require('gulp-postcss'),
    header            =  require('gulp-header'),
    pug               =  require('gulp-pug'),
    pkg               =  require('./package.json'),
    rename            =  require('gulp-rename'),
    clean             =  require('gulp-clean'),
    sourcemaps        =  devBuild ? require('gulp-sourcemaps') : null,
    browserSync       =  devBuild ? require('browser-sync') : null,

    // Set the banner content
    banner = ['/*!\n',
    ' * <%= pkg.title %> <%=(pkg.homepage) %> | v<%= pkg.version %>\n',
    ' * Copyright 2008-2019 | <%= pkg.title %>\n',
    ' * Licensed under <%= pkg.license %> | (<%= pkg.licenseUrl %>)\n',
    ' */\n',
    ''
    ].join('');

    console.log('Gulp', devBuild ? 'development' : 'production', 'build');

    /*
    ** clean task
    */
    gulp.task('clean', (done) => {
      del.sync([ dir.build ]);

      done();
    });

    const cssConfig = {

      dev         : dir.dev + 'sass/**/*.scss',
      watch       : dir.src + 'sass/**/*.scss',
      build       : dir.src + 'css',
      release     : dir.build + 'css',

      sassOpts: {
        sourceMap       : devBuild,
        outputStyle     : 'nested',
        precision       : 3,
        errLogToConsole : true,
        includePath     : ['node_modules']
      }
    };

    const jsConfig = {
      dev         : dir.dev + 'js/*.js',
      watch       : dir.src + 'js/*.js'
    };

    const pugConfig = {
      dev         : dir.src + 'src/*.pug',
      watch       : dir.src + 'src/*.pug'
    };

    const fontsConfig = {
      fontawesome     : dir.node + '@fortawesome/fontawesome-free/webfonts/**',
      overpassmono    : './fonts/overpass-mono-webfont/**',
      overpass        : './fonts/overpass-webfont/**'
    };

    if (!devBuild) {
      cssConfig.postCSS.push(
        require('usedcss')({ html: ['index.html'] }),
        require('cssnano')
      );
    }

    sass.compiler = require('node-sass');

    function cleanDist(cb) {
      del.sync([dir.build]);
      cb();
    };

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
      .pipe(gulp.dest(cssConfig.release))
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

    // compile pug templates
    function pugViews(cb) {
      return gulp.src(pugConfig.dev)
      .pipe(pug({
        doctype: 'html',
        pretty: true
      }))
      .pipe(gulp.dest('./'));
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

    function watchPUG(cb) {
      gulp.watch(pugConfig.dev, pugViews);
      // browserSync.reload();
    }

    function browserSyncReload(cb) {
      browserSync.reload();
    }

    function copySource(cb) {
      gulp.src('./README.md').pipe(gulp.dest(dir.build));
      gulp.src('./package.json').pipe(gulp.dest(dir.build));
      gulp.src('./manifest.json').pipe(gulp.dest(dir.build));
      gulp.src('./css/*.*').pipe(gulp.dest('./dist/css'));
      gulp.src('./js/*.*').pipe(gulp.dest('./dist/js'));
      gulp.src('./img/**/*.*').pipe(gulp.dest('./dist/img/'));
      gulp.src('./fonts/**/*.*').pipe(gulp.dest('./dist/fonts/'));
      gulp.src('./*.html').pipe(gulp.dest(dir.build));

      cb();
    }

    // copy FA5 webfonts
    function webFonts(cb) {
      gulp.src(fontsConfig.fontawesome)
      .pipe(gulp.dest('fonts/webfonts'));

      cb();
    }

    function fonts(cb) {
      gulp.src(fontsConfig.overpassmono)
        .pipe(fontsConfig.dest(dir.build + 'fonts/overpass-mono-webfont'));
      gulp.src(fontsConfig.overpassmono)
        .pipe(gulp.dest(dir.build + 'fonts/overpass-webfont'));

      cb();
    }

    function buildSite(cb) {
      gulp.parallel(cssDev, jsDev, pugViews, fonts);

      cb();
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

    exports.cleanDist       = cleanDist;
    exports.cssDev          = cssDev;
    exports.jsDev           = jsDev;
    exports.pugViews        = pugViews;
    exports.htmlWatch       = htmlWatch;
    exports.browserSyncInit = browserSyncInit;
    exports.buildSite       = buildSite;
    exports.copySource      = copySource;
    exports.webFonts        = webFonts;
    exports.fonts           = fonts;
    exports.browserSyncReload = browserSyncReload;

    exports.serve = gulp.series(
      buildSite,
      gulp.parallel(browserSyncInit, watchPUG, watchCSS, watchJS),
      htmlWatch,
      browserSyncReload
    );

    exports.build = gulp.series(
      buildSite,
      copySource,
      cleanDist
    );

    exports.default = gulp.series(
      cssDev,
      jsDev,
      pugViews
    );

})();

