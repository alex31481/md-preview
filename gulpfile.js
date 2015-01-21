'use strict';
var gulp = require('gulp');
//var gulp = require('gulp-load-plugins')();
// inject bower components
gulp.task('wiredep', function() {
var wiredep = require('wiredep').stream;
gulp.src('app/*.html')
  .pipe(wiredep({
    exclude: ['bootstrap-sass-official']
  }))
  .pipe(gulp.dest('app'));
});
