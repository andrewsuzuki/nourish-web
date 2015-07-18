'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function HeaderCtrl($log, AppSettings) {

    // ViewModel
    var vm = this;

    vm.halldrop = AppSettings.halls;

    vm.isCollapsed = true;

}

controllersModule.controller('HeaderCtrl', HeaderCtrl);
