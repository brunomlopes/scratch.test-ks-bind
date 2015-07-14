var gulp = require('gulp');
var watch = require('gulp-watch');
var babel = require('gulp-babel');

gulp.task('default', function() {
  return gulp.src('*.es6')
    .pipe(watch('*.es6'))
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});