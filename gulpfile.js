// @ts-nocheck
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var cleanCSS = require('gulp-clean-css');
var header = require('gulp-header');
var notify = require('gulp-notify');
var pkg = require('./package.json');
var realFavicon = require ('gulp-real-favicon');
var rename = require("gulp-rename");
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var fs = require('fs');

// Set the banner content
var banner = ['/*!\n',
' * https://www.adamjolicoeur.com\n',
' * <%= pkg.title %> v<%= pkg.version %>\n',
' * Copyright 2008-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
' * Licensed under <%= pkg.license %>\n',
' */\n',
''
].join('');

// File where the favicon markups are stored
var FAVICON_DATA_FILE = 'faviconData.json';

// Generate the icons. This task takes a few seconds to complete.
// You should run it at least once to create the icons. Then,
// you should run it whenever RealFaviconGenerator updates its
// package (see the check-for-favicon-update task below).
gulp.task('generate-favicon', function(done) {
  realFavicon.generateFavicon({
    masterPicture: 'img/master_picture.png',
    dest: 'img/',
    iconsPath: '/img',
    design: {
      ios: {
        pictureAspect: 'noChange',
        assets: {
          ios6AndPriorIcons: false,
          ios7AndLaterIcons: false,
          precomposedIcons: false,
          declareOnlyDefaultIcon: true
        }
      },
      desktopBrowser: {},
      windows: {
        pictureAspect: 'noChange',
        backgroundColor: '#2b5797',
        onConflict: 'override',
        assets: {
          windows80Ie10Tile: true,
          windows10Ie11EdgeTiles: {
            small: false,
            medium: true,
            big: false,
            rectangle: false
          }
        }
      },
      androidChrome: {
        pictureAspect: 'noChange',
        themeColor: '#ffffff',
        manifest: {
          display: 'standalone',
          orientation: 'notSet',
          onConflict: 'override',
          declared: true
        },
        assets: {
          legacyIcon: false,
          lowResolutionIcons: false
        }
      },
      safariPinnedTab: {
        pictureAspect: 'silhouette',
        themeColor: '#5bbad5'
      }
    },
    settings: {
      scalingAlgorithm: 'Mitchell',
      errorOnImageTooSmall: false,
      readmeFile: false,
      htmlCodeFile: false,
      usePathAsIs: false
    },
    versioning: {
      paramName: 'v',
      paramValue: 'YAoMBnzn4g'
    },
    markupFile: FAVICON_DATA_FILE
  }, function() {
    done();
  });
});

// Inject the favicon markups in your HTML pages. You should run
// this task whenever you modify a page. You can keep this task
// as is or refactor your existing HTML pipeline.
gulp.task('inject-favicon-markups', function() {
  return gulp.src([ '/index.html' ])
    .pipe(realFavicon.injectFaviconMarkups(JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).favicon.html_code))
    .pipe(gulp.dest('/'));
});

// Check for updates on RealFaviconGenerator
// Run this task from time to time. Ideally, make it part of your
// continuous integration system.
gulp.task('check-for-favicon-update', function(done) {
  var currentVersion = JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).version;
  realFavicon.checkForUpdates(currentVersion, function(err) {
    if (err) {
      throw err;
    }
  });
});

gulp.task('sass', function() {
  return gulp.src("dev/sass/*.scss")
  .pipe(sass().on('error', sass.logError))
  .pipe(header(banner, { pkg: pkg }))
  .pipe(sourcemaps.init())
  .pipe(cleanCSS({
    level: {
      2: {
        removeDuplicateRules: true
      }
    },
    compatibility: "*"
  }))
  .pipe(sourcemaps.write())
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest('css'))
  .pipe(browserSync.reload({
    stream: true
  }));
});

// Minify JS
gulp.task('javascript', function() {
  return gulp.src('dev/js/jolicoeur.js')
  .pipe(uglify())
  .pipe(header(banner, { pkg: pkg }))
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest('js'))
  .pipe(browserSync.reload({
    stream: true
  }));
});

// Copy vendor libraries from /node_modules into /vendor
gulp.task('copy', function() {
  gulp.src(['node_modules/bootstrap/dist/**/*', '!**/npm.js', '!**/bootstrap-theme.*', '!**/*.map'])
    .pipe(gulp.dest('dev/vendor/bootstrap'));
  gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/jquery/dist/jquery.min.js'])
    .pipe(gulp.dest('dev/vendor/jquery'));
});

// Configure the browserSync task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''
    },
    ui: {
      port: 8001 // customize port for browserSync UI
    },
    port: 8080, // use 8080 to prevent conflicts with other localhosts
    reloadOnRestart: true,
    notify: false // prevent the browserSync notification from appearing
  });
});

// ensure js finishes, reload browser
gulp.task('js-watch', ['javascript'], function (done) {
  browserSync.reload();
  done();
});

// ensure sass finishes, reload browser
gulp.task('sass-watch', ['sass'], function (done) {
  browserSync.reload();
  done();
});

// Dev task with browserSync
gulp.task('serve', ['sass', 'javascript', 'inject-favicon-markups'], function () {
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
  gulp.watch('dev/js/*.js', ['js-watch']);
  gulp.watch('dev/sass/*.scss', ['sass-watch']);
  gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('default', ['javascript', 'sass', 'copy']);
