var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var browserSync = require('browser-sync').create();
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
' * Adam J. Jolicoeur - <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
' * Copyright 2008-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
' * Licensed under <%= pkg.license %>\n',
' */\n',
''
].join('');

// compile custom scss files
gulp.task('sass', function() {
  return gulp.src("dev/sass/*.scss")
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

// compile custom javascript file
gulp.task('js', function() {
  return gulp.src("dev/js/*.js")
  .pipe(header(banner, { pkg: pkg }))
  .pipe(gulp.dest('js'))
  .pipe(browserSync.reload({
    stream: true
  }));
});

// copy particlesjs file
gulp.task('particles', function() {
  gulp.src('./node_modules/particlesjs/dist/particles.min.js')
  .pipe(gulp.dest('./js'));
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

// build distribution folder
gulp.task('dist', ['css', 'views', 'js', 'particles'], function () {
  return gulp.src('./*.html', './css')
    .pipe(gulp.dest('./dist'))
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
  gulp.watch('dev/sass/*.scss', ['sass-watch']);
  gulp.watch('src/**/*.pug', ['views']);
  gulp.watch('dev/js/*.js', ['js']);
  gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('default', ['css', 'js', 'particles', 'views']);
