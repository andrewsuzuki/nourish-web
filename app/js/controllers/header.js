'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function HeaderCtrl($log, AppSettings) {

    // ViewModel
    var vm = this;

    vm.halldrop = AppSettings.halls;

}

controllersModule.controller('HeaderCtrl', HeaderCtrl);
