'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function HallCtrl() {

    // ViewModel
    var vm = this;

    vm.title = 'South';

    vm.days = [
        { title: 'Today' },
        { title: 'Tommorow' },
        { title: 'Etc' }
    ];

    vm.day = 'Today';

    vm.tabs = [
        { title: 'Dynamic Title 1', content: 'Dynamic content 1' },
        { title: 'Dynamic Title 2', content: 'Dynamic content 2' }
    ];

}

controllersModule.controller('HallCtrl', HallCtrl);
