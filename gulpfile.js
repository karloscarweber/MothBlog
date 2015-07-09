'user strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat')
var sass = require('gulp-sass')

gulp.task('default', ['sass:watch'], function() {

});

gulp.task('sass', function() {
  return gulp.src('./assets/scss/**/*.scss')
    .pipe(concat('main.css'))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./assets'))
});

gulp.task('sass:watch', function() {
  gulp.watch('./assets/scss/**/*.scss', ['sass']);
});






// end
