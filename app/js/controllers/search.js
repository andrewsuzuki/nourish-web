'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function SearchCtrl($rootScope, $state, ItemService) {

    // ViewModel
    var vm = this;

    vm.loaded = false;

    vm.query = ''; // copy of $rootScope.searchQuery

    vm.findHallmeals = function(hallmealsRaw) {
        var hallmeals = [];
        
        hallmealsRaw.forEach(function(hm) {
            hallmeals.push({
                hall: ItemService.hall(hm.hall),
                meal: ItemService.meal(hm.meal)
            });
        });

        return hallmeals;
    };

    $rootScope.$watch('searchQuery', function() {
        vm.query = $rootScope.searchQuery;
    });

    ItemService.allItems().then(function(items) {
        vm.items = items;
        vm.loaded = true;
    });

    // Clear search box if we're leaving the search page
    $rootScope.$on('$stateChangeSuccess', function() {
        if (!$state.includes('search')) {
            $rootScope.searchQuery = '';
        }
    });

}

controllersModule.controller('SearchCtrl', SearchCtrl);
