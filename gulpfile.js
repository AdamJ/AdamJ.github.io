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
        errLogToConsole : true
      }
    };

    const fonts = {
      fontawesome     : dir.node + '@fortawesomefontawesome-free/webfonts/**',
      overpassmono    : './fonts/overpass-mono-webfont/**',
      overpass        : './fonts/overpass-webfont/**'
    };

    if (!devBuild) {
      cssConfig.postCSS.push(
        require('usedcss')({ html: ['index.html'] }),
        require('cssnano')
      );
    }

    gulp.task('clean-dist', (done) => {
      del.sync([dir.build]);
      done();
    });

    // gulp.task('clean-dist', (done) => {
    //   gulp.src("dist/", {read: false})
    //   .pipe(clean());

    //   done();
    // });

    // convert custom scss files to css using PostCSS
    // @ts-ignore
    gulp.task('css', (done) => {
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
    });

    // compile custom javascript file
    gulp.task('js', (done) => {
      gulp.src("dev/js/*.js")
      .pipe(header(banner, { pkg: pkg }))
      .pipe(gulp.dest('js'))
      .pipe(browserSync.reload({
        stream: true
      }));
      done();
    });

    // compile pug templates
    gulp.task('views', (done) => {
      gulp.src('./src/*.pug')
      .pipe(pug({
        doctype: 'html',
        pretty: true
      }))
      .pipe(gulp.dest('./'));

      done();
    });

    // Configure the browserSync task
    gulp.task('browserSync', (done) => {
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

      done();
    });

    // ensure scss finishes, reload browser
    // @ts-ignore
    gulp.task('sass-watch', gulp.series('css'), (done) => {
      browserSync.reload();

      done();
    });

    gulp.task('copy-source', gulp.series( gulp.parallel('clean-dist'), (done) => {
      gulp.src('./README.md').pipe(gulp.dest(dir.build));
      gulp.src('./package.json').pipe(gulp.dest(dir.build));
      gulp.src('./manifest.json').pipe(gulp.dest(dir.build));
      gulp.src('./css/*.*').pipe(gulp.dest('./dist/css'));
      gulp.src('./js/*.*').pipe(gulp.dest('./dist/js'));
      gulp.src('./img/**/*.*').pipe(gulp.dest('./dist/img/'));
      gulp.src('./fonts/**/*.*').pipe(gulp.dest('./dist/fonts/'));
      gulp.src('./*.html').pipe(gulp.dest(dir.build));

      done();
    }));

    // copy FA5 webfonts
    gulp.task('webfonts', (done) => {
      gulp.src(fonts.fontawesome)
      .pipe(gulp.dest('fonts/webfonts'))
      // .pipe(browserSync.reload({
      //   stream: true
      // }));

      done();
    });

    gulp.task('fonts', (done) => {
      gulp.src(fonts.overpassmono).pipe(gulp.dest(dir.build + 'fonts/overpass-mono-webfont'));
      gulp.src(fonts.overpassmono).pipe(gulp.dest(dir.build + 'fonts/overpass-webfont'));
      done();
    });

    gulp.task('build', gulp.series('css', 'js', 'views', 'fonts', gulp.parallel('copy-source'), (done) => {
      done();
    }));

    // Dev task with browserSync
    // @ts-ignore
    gulp.task('serve', gulp.series('css', 'js', (done) => {
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
      gulp.watch('dev/sass/**/*.scss', gulp.series('sass-watch'));
      gulp.watch('src/**/*.pug', gulp.series('views'));
      gulp.watch('dev/js/*.js', gulp.series('js'));
      gulp.watch('*.html').on('change', browserSync.reload);

      done();
    }));

    gulp.task('default', gulp.series('css', 'js', 'views', (done) => {
      done();
    }));

})();

