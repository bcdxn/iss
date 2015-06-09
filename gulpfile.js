var gulp             = require('gulp'),
    // uglify           = require('uglify'),
    source           = require('vinyl-source-stream'),
    browserify       = require('browserify'),
    streamify        = require('gulp-streamify'),
    rename           = require('gulp-rename'),
    watch            = require('gulp-watch'),
    copy             = require('gulp-copy'),
    less             = require('gulp-less'),
    CleanCssPlugin   = require('less-plugin-clean-css'),
    AutoprefixPlugin = require('less-plugin-autoprefix'),
    cleancss         = new CleanCssPlugin({ advanced: true }),
    autoprefix       = new AutoprefixPlugin({ browsers: ['last 2 versions'] }),
    path             = {};

path.LESS        = './src/less/index.less';
path.JS          = './src/js/**/*.js';
path.JS_ENTRY    = './src/js/index.js';
path.DIST        = './dist';
path.OUT_CSS     = 'bundle.css';
path.OUT_JS      = 'bundle.js';
path.OUT_CSS_MIN = 'bundle.min.css';
path.OUT_JS_MIN  = 'bundle.min.js';

// CSS
gulp.task('css', function () {
  gulp.src(path.LESS)
      .pipe(less({
        plugins: [autoprefix, cleancss]
      }))
      .pipe(rename(path.OUT_CSS_MIN))
      .pipe(gulp.dest(path.DIST));
});

// JS
gulp.task('js', function () {
  
});

// Watch CSS
gulp.task('watchCss', function () {
  gulp.watch(path.LESS, ['css']);
});

// Watch JS
gulp.task('watchJs', function () {
  gulp.watch(path.JS, ['js']);
});

gulp.task('default', ['css', 'js', 'watchCss', 'watchJs']);