'use strict';

var angular = require('angular');

// angular modules
require('angular-ui-router');
require('./templates');
require('./controllers/_index');
require('./services/_index');
require('./directives/_index');

// create and bootstrap application
angular.element(document).ready(function() {

  var requires = [
    'ui.router',
    'templates',
    'app.controllers',
    'app.services',
    'app.directives'
  ];

  // mount on window for testing
  window.app = angular.module('nourish', requires);

  angular.module('nourish').constant('AppSettings', require('./constants'));

  angular.module('nourish').config(require('./on_config'));

  angular.module('nourish').run(require('./on_run'));

  angular.bootstrap(document, ['nourish']);

});
