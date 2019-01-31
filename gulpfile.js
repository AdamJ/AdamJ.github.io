var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var browserSync = require('browser-sync').create();
var clean = require('gulp-clean');
var cssnano = require('cssnano');
var header = require('gulp-header');
var postcss = require('gulp-postcss');
var pkg = require('./package.json');
var pug = require('gulp-pug');
var rename = require("gulp-rename");
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

// Set the banner content
var banner = ['/*!\n',
' * <%= pkg.title %> <%=(pkg.homepage) %> | v<%= pkg.version %>\n',
' * Copyright 2008-2019 | <%= pkg.title %>\n',
' * Licensed under <%= pkg.license %> | (<%= pkg.licenseUrl %>)\n',
' */\n',
''
].join('');

// compile custom scss files
gulp.task('sass', function() {
  return gulp.src("dev/sass/**/*.scss")
  .pipe(sass().on('error', sass.logError))
  .pipe(header(banner, { pkg: pkg }))
  .pipe(gulp.dest('css'))
  .pipe(browserSync.reload({
    stream: true
  }));
});

// convert custom scss files to css using PostCSS
// @ts-ignore
gulp.task('css', ['sass'], function() {
  var plugins = [
      autoprefixer({browsers: ['last 1 version']}),
      cssnano()
  ];
  return gulp.src('./css/jolicoeur.css')
    .pipe(sourcemaps.init())
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./css'));
});

// copy FA5 webfonts
gulp.task('webfonts', function() {
  return gulp.src("node_modules/@fortawesome/fontawesome-free/webfonts/**")
  .pipe(gulp.dest('fonts/webfonts'))
  .pipe(browserSync.reload({
    stream: true
  }));
});

// compile custom javascript file
gulp.task('js', function() {
  return gulp.src("dev/js/*.js")
  .pipe(header(banner, { pkg: pkg }))
  .pipe(gulp.dest('js'))
  .pipe(browserSync.reload({
    stream: true
  }));
});

// compile pug templates
gulp.task('views', function () {
  return gulp.src('./src/*.pug')
  .pipe(pug({
    doctype: 'html',
    pretty: true
  }))
  .pipe(gulp.dest('./'));
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

// ensure scss finishes, reload browser
// @ts-ignore
gulp.task('sass-watch', ['css'], function (done) {
  browserSync.reload();
  done();
});

gulp.task('copy-source', ['clean-dist'], function () {
  gulp.src('./README.md').pipe(gulp.dest('./dist'));
  gulp.src('./package.json').pipe(gulp.dest('./dist'));
  gulp.src('./manifest.json').pipe(gulp.dest('./dist'));
  gulp.src('./css/*.*').pipe(gulp.dest('./dist/css'));
  gulp.src('./js/*.*').pipe(gulp.dest('./dist/js'));
  gulp.src('./img/**/*.*').pipe(gulp.dest('./dist/img/'));
  gulp.src('./fonts/**/*.*').pipe(gulp.dest('./dist/fonts/'));
  gulp.src('./*.html').pipe(gulp.dest('./dist'));
});

gulp.task('build', ['copy-source']);

gulp.task('clean-dist', function () {
  return gulp.src("dist/", {read: false})
    .pipe(clean());
});

// Dev task with browserSync
// @ts-ignore
gulp.task('serve', ['css', 'js'], function () {
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
  gulp.watch('dev/sass/**/*.scss', ['sass-watch']);
  gulp.watch('src/**/*.pug', ['views']);
  gulp.watch('dev/js/*.js', ['js']);
  gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('default', ['css', 'js', 'views']);
