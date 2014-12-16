'use strict';
require('angular/angular');
require('angular-route');
require('angular-cookies');
require('angular-base64');

var involveApp = angular.module('involveApp', ['ngRoute', 'ngCookies', 'base64']);

//services
require('./events/services/resource_backend_service')(involveApp);

//controllers
require('./user/controllers/login_controller.js')(involveApp);
require('./events/controllers/calendar_controller.js')(involveApp);

involveApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/template', {
    templateUrl: 'templates/login_template.html',
    controller: 'loginCtrl'
  })
  .when('/calendar', {
    templateUrl: 'templates/events/calendar_template.html',
    controller: 'calendCtrl'
  })
  .otherwise({
    redirectTo: '/template'
  });
}]);