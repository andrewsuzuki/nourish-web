'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function HallDropdownCtrl($log, HallService) {

    // ViewModel
    var vm = this;

    vm.items = [];

    HallService.get().then(function(data) {
        data.forEach(function(el) {
            vm.items.push(el.name);
        });
    });

}

controllersModule.controller('HallDropdownCtrl', HallDropdownCtrl);
