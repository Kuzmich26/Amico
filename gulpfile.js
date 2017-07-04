var gulp = require('gulp'),
    del = require('del'),
    concat = require('gulp-concat'),
    min = require('gulp-uglify'),
    sass = require('gulp-sass'),
    size = require('gulp-size'),
    sourcemaps = require('gulp-sourcemaps'),
    browser = require("browser-sync").create();
    var paths = {
    js : './dev/JS/**/*.js',
    jsdir : './dev/JS',
    script : './dev//scripts/**/*.js',
    scss : [
        './dev/sass/**/*.scss',
        '!dev/sass/**/*_scsslint_tmp*.scss'
    ],
    cssdir : './dev/css',
    html: './dev/**/*.html'
};
