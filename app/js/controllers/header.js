'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function HeaderCtrl($rootScope, $log, AppSettings) {

    // ViewModel
    var vm = this;

    vm.halldrop = AppSettings.halls;

    vm.isCollapsed = true;

    // Collapse menu when we change states
    $rootScope.$on('$stateChangeSuccess', function(/* long */) {
        vm.isCollapsed = true;
    });

}

controllersModule.controller('HeaderCtrl', HeaderCtrl);
