var gulp = require('gulp');
var handlebars = require('gulp-handlebars');
var declare = require('gulp-declare');
var concat = require('gulp-concat');

gulp.task('templates', function() {
  gulp.src(['templates/*.hbs'])
    .pipe(handlebars())
    .pipe(declare({
      namespace: 'Handlebars.templates',
      noRedeclare: true
    }))
    .pipe(concat('compiled.js'))
    .pipe(gulp.dest('templates'));
});
