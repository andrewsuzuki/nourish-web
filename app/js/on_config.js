'use strict';

/**
 * @ngInject
 */
function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(true);

    $stateProvider
        .state('Today', {
            url: '/',
            controller: 'TodayCtrl as today',
            templateUrl: 'today.html',
            title: 'Today'
        })
        .state('Hall', {
            url: '/hall/:hallName',
            controller: 'HallCtrl as hall',
            templateUrl: 'hall.html',
            title: 'Hall'
        });

    $urlRouterProvider.otherwise('/');

}

module.exports = OnConfig;
