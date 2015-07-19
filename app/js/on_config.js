'use strict';

/**
 * @ngInject
 */
function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(true);

    $stateProvider
        .state('today', {
            url: '/',
            controller: 'TodayCtrl as today',
            templateUrl: 'today.html',
            title: 'Today'
        })
        .state('hall', {
            url: '/hall/:hallName',
            controller: 'HallCtrl as hall',
            templateUrl: 'hall.html',
            title: 'Hall'
        })
        .state('search', {
            url: '/search',
            controller: 'SearchCtrl as search',
            templateUrl: 'search.html',
            title: 'Search'
        })
        .state('about', {
            url: '/about',
            controller: 'AboutCtrl as about',
            templateUrl: 'about.html',
            title: 'About'
        });

    $urlRouterProvider.otherwise('/');

}

module.exports = OnConfig;
