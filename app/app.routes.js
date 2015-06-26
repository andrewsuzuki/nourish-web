angular.module('app.routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {

	$routeProvider
		// routes here
		;

	$locationProvider.html5Mode(true);

});
