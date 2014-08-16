var gulp =       require('gulp');
var handlebars = require('gulp-handlebars');
var declare =    require('gulp-declare');
var concat =     require('gulp-concat');
var wrap =       require('gulp-wrap');
var header =     require('gulp-header');

gulp.task('templates', function() {
  gulp.src(['templates/*.hbs'])
    .pipe(handlebars({
      handlebars: require('handlebars')
    }))
    .pipe(declare({
      namespace: 'Template.templates',
      noRedeclare: true
    }))
    .pipe(concat('compiled.js'))
    .pipe(header('Template = {};\nTemplate.render = function(templateName, context) { return Handlebars.template(Template.templates[templateName])(context) };\n'))
    .pipe(gulp.dest('templates'));
});
