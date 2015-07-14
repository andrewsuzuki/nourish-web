'use strict';

var config         = require('../config');
var gulp           = require('gulp');
var templateCache  = require('gulp-angular-templatecache');
var handlebars     = require('gulp-compile-handlebars');
var rename         = require('gulp-rename');

// Views task
gulp.task('views', function() {

  var templateData = (global.isProd) ? { baseUrlPath: '/nourish-web/' } : { baseUrlPath: '/' };

  // Put our index.hbs in the dist folder
  gulp.src('app/index.hbs')
    .pipe(handlebars(templateData))
    .pipe(rename('index.html'))
    .pipe(gulp.dest(config.dist.root));

  // Process any other view files from app/views
  return gulp.src(config.views.src)
    .pipe(templateCache({
      standalone: true
    }))
    .pipe(gulp.dest(config.views.dest));

});
