var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var header = require('gulp-header');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');
var pkg = require('./package.json');

// Set the banner content
var banner = ['/*!\n',
    ' * www.AdamJolicoeur.com - <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
    ' * Copyright 2008-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
    ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n',
    ' */\n',
    ''
].join('');

gulp.task('sass', function() {
    return gulp.src("sass/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(header(banner, { pkg: pkg }))
        .pipe(gulp.dest('css'))
	    .pipe(browserSync.reload({
            stream: true
        }))
        .pipe(notify("CSS compiled"));
});

// gulp.task('sass', function() {
//     return gulp.src('sass/*.scss')
//         .pipe(sass())
//         .pipe(header(banner, { pkg: pkg }))
//         .pipe(gulp.dest('css'))
//         .pipe(browserSync.reload({
//             stream: true
//         }))
// });

// Minify compiled CSS
gulp.task('minify-css', ['sass'], function() {
    return gulp.src('css/grayscale.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Minify JS
gulp.task('minify-js', function() {
    return gulp.src('js/grayscale.js')
        .pipe(uglify())
        .pipe(header(banner, { pkg: pkg }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('js'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Copy vendor libraries from /node_modules into /vendor
gulp.task('copy', function() {
    gulp.src(['node_modules/bootstrap/dist/**/*', '!**/npm.js', '!**/bootstrap-theme.*', '!**/*.map'])
        .pipe(gulp.dest('vendor/bootstrap'))

    gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest('vendor/jquery'))

    gulp.src([
            'node_modules/font-awesome/**',
            '!node_modules/font-awesome/**/*.map',
            '!node_modules/font-awesome/.npmignore',
            '!node_modules/font-awesome/*.txt',
            '!node_modules/font-awesome/*.md',
            '!node_modules/font-awesome/*.json'
        ])
        .pipe(gulp.dest('vendor/font-awesome'))
})

// Configure the browserSync task
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: ''
        },
    })
})

// ensure js finishes, reload browser
gulp.task('js-watch', ['minify-js'], function (done) {
    browserSync.reload();
    done();
});

// ensure sass finishes, reload browser
gulp.task('sass-watch', ['sass'], function (done) {
    browserSync.reload();
    done();
})

// Dev task with browserSync
gulp.task('serve', ['sass', 'minify-js'], function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('js/*.js', ['js-watch']);
    gulp.watch('sass/*.scss', ['sass-watch']);
    gulp.watch('*.html').on('change', browserSync.reload);
});

// Dev task with browserSync
// gulp.task('dev', ['browserSync', 'minify-css', 'minify-js'], function() {
//     gulp.watch('sass/*.scss', ['sass']);
//     gulp.watch('css/*.css', ['minify-css']);
//     gulp.watch('js/*.js', ['minify-js']);
//     // Reloads the browser whenever HTML or JS files change
//     gulp.watch('*.css', browserSync.reload);
//     gulp.watch('*.html', browserSync.reload);
//     gulp.watch('js/**/*.js', browserSync.reload);
// });

// Run everything
gulp.task('default', ['sass', 'minify-css', 'minify-js', 'copy']);