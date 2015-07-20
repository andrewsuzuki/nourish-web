'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function WingsCtrl($rootScope, $state, ItemService) {

    // ViewModel
    var vm = this;

    vm.loaded = false;

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

    ItemService.allItems().then(function(items) {
        var wings = [];

        items.forEach(function(item) {
            if (item.name.toLowerCase().indexOf('wing') !== -1) {
                wings.push(item);
            }
        });

        vm.items = wings;

        vm.loaded = true;
    });
}

controllersModule.controller('WingsCtrl', WingsCtrl);
