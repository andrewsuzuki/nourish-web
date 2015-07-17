'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function HallCtrl(HallService) {

    // ViewModel
    var vm = this;

    vm.title = 'South';

    vm.days = [
        {
            title: 'Today',
            meals: [
                { title: 'Breakfast', content: 'Breakfast menu', state: 'hall' },
                { title: 'Lunch', content: 'Lunch menu', state: 'cool' }
            ]
        },
        {
            title: 'Tomorrow',
            meals: [
                { title: 'Breakfast', content: 'Breakfast menu', state: 'hall' },
                { title: 'Lunch', content: 'Lunch menu', state: 'cool' }
            ]
        },
        {
            title: 'Etc',
            meals: [
                { title: 'Breakfast', content: 'Breakfast menu', state: 'hall' },
                { title: 'Lunch', content: 'Lunch menu', state: 'cool' }
            ]
        },
    ];

    vm.day = 'Today';

}

controllersModule.controller('HallCtrl', HallCtrl);
