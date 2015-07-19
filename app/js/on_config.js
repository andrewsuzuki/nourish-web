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
        .state('wings', {
            url: '/wings',
            controller: 'WingsCtrl as wings',
            templateUrl: 'wings.html',
            title: 'Wings Finder'
        })
        .state('about', {
            url: '/about',
            controller: 'AboutCtrl as about',
            templateUrl: 'about.html',
            title: 'About'
        })
        .state('app', {
            url: '/app',
            controller: 'MobileAppCtrl as ma',
            templateUrl: 'mobileapp.html',
            title: 'Mobile App'
        });

    $urlRouterProvider.otherwise('/');

}

module.exports = OnConfig;
