var gulp = require('gulp'),
  del = require('del'),
  concat = require('gulp-concat'),
  min = require('gulp-uglify'),
  sass = require('gulp-sass'),
  size = require('gulp-size'),
  sourcemaps = require('gulp-sourcemaps'),
  browser = require("browser-sync").create();
var paths = {
  js: './dev/JS/**/*.js',
  jsdir: './dev/JS',
  script: './dev//scripts/**/*.js',
  scss: [
    './dev/sass/**/*.scss',
    '!dev/sass/**/*_scsslint_tmp*.scss'
  ],
  cssdir: './dev/css',
  html: './dev/**/*.html'
};
gulp.task('clean', function() {
  del.sync([paths.jsdir, paths.cssdir]);
});
gulp.task('sass:dev', function () {
    return gulp.src(paths.scss)
        .pipe(sourcemaps.init())
        .pipe(sass({
            sourceComments: 'normal'
        }).on('error', sass.logError))
        .pipe(size({ showFiles: true }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.cssdir))
        .pipe(browser.stream());
});
