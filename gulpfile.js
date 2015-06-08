var gulp       = require('gulp'),
    uglify     = require('uglify'),
    source     = require('vinyl-source-stream'),
    browserify = require('browserify'),
    streamify  = require('gulp-streamify'),
    rename     = require('gulp-rename'),
    watch      = require('gulp-watch'),
    copy       = require('gulp-copy'),
    cleanCss   = require('less-plugin-clean-css'),
    autoprefix = require('less-plugin-autoprefix'),
    path       = {};

path.LESS        = './src/less/**/*.less';
path.JS          = './src/js/**/*.js';
path.JS_ENTRY    = './src/js/index.js';
path.DIST        = './dist';
path.OUT_CSS     = 'bundle.css';
path.OUT_JS      = 'bundle.js';
path.OUT_CSS_MIN = 'bundle.min.css';
path.OUT_JS_MIN  = 'bundle.min.js';

// CSS
gulp.task('css', function () {
  
});

// JS
gulp.task('js', function () {
  
});

// Watch CSS
gulp.task('watchCss', function () {
  gulp.watch(path.CSS, ['css']);
});

// Watch JS
gulp.task('watchJs', function () {
  gulp.watch(path.CSS, ['js']);
});

gulp.task('default', ['css', 'js', 'watchCss', 'watchJs']);