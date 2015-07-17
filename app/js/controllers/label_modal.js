'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function LabelModalInstanceCtrl($modalInstance, item) {

    // ViewModel
    var vm = this;

    vm.item = item;

    vm.close = function() {
        $modalInstance.dismiss('cancel');
    };

}

controllersModule.controller('LabelModalInstanceCtrl', LabelModalInstanceCtrl);
