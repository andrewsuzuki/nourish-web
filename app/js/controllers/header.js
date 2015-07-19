'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function HeaderCtrl($state, $rootScope, $location, AppSettings) {

    // ViewModel
    var vm = this;

    vm.halldrop = AppSettings.halls;

    vm.isCollapsed = true;

    // Collapse menu when we change states
    $rootScope.$on('$stateChangeSuccess', function(/* long */) {
        vm.isCollapsed = true;
    });

    // Search query
    $rootScope.searchQuery = '';

    // If the search box text changes, switch to our search page
    // if we're not already there
    $rootScope.$watch('searchQuery', function() {
        if ($rootScope.searchQuery.length && !$state.includes('search')) {
            $location.url('/search');
        }
    });

}

controllersModule.controller('HeaderCtrl', HeaderCtrl);
