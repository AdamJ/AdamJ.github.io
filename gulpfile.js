var gulp = require('gulp');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var notify = require('gulp-notify');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('copyImages', function() {
   return gulp.src([
       'img/**'
   ])
       .pipe(gulp.dest('dist/img'));
});

// process JS files and return the stream
gulp.task('js', function () {
    return gulp.src('javascript/*.js')
	.pipe(gulp.dest('dist/js'));
});

gulp.task('sass', function() {
    return gulp.src("sass/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'))
	    .pipe(browserSync.stream())
        .pipe(notify("CSS compiled"));
});

// ensure js finishes, reload browser
gulp.task('js-watch', ['js'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('sass-watch', ['sass'], function (done) {
    browserSync.reload();
    done();
})

//launch Browsersync and watch SASS & JS files
gulp.task('serve', ['sass', 'js'], function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("javascript/*.js", ['js-watch']);
    gulp.watch("sass/*.scss", ['sass-watch']);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("includes/**/*.html").on('change', browserSync.reload);
});

//gulp.task('default', ['copyCSS', 'copyJS', 'copyImages', 'copyFonts']);