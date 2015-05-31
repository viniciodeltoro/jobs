var gulp = require('gulp'),
  watch = require('gulp-watch'),
  sourcemaps = require('gulp-sourcemaps'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  del = require('del');

var productionScripts = [
  'public/javascripts/app.js',
  'public/javascripts/**/*.js'
];

gulp.task('uglify', function () {
  del.sync(['public/javascripts/app.min.js']);
  return gulp.src(productionScripts)
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/javascripts'));
});

gulp.task('watch', function () {
  gulp.watch(productionScripts, ['uglify']);
});

function handleError(error) {
  console.log(error.toString());
  this.emit('end');
}