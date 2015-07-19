'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function SearchCtrl($rootScope, $state, ItemService) {

    // ViewModel
    var vm = this;

    vm.query = ''; // copy of $rootScope.searchQuery

    $rootScope.$watch('searchQuery', function() {
        vm.query = $rootScope.searchQuery;
    });

    vm.items = [];

    // Load all items (TODO: make smarter)
    ItemService
        .all()
        .then(function(items) {
            vm.items = items;
        });

    // Clear search box if we're leaving the search page
    $rootScope.$on('$stateChangeSuccess', function() {
        if (!$state.includes('search')) {
            $rootScope.searchQuery = '';
        }
    });

}

controllersModule.controller('SearchCtrl', SearchCtrl);
