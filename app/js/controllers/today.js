'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function TodayCtrl($modal, ItemService, AppSettings) {

    // ViewModel
    var vm = this;

    vm.loaded = false;

    ItemService.today().then(function(halls) {
        halls.forEach(function(hall) {
            hall.meals.forEach(function(meal) {
                meal.cats = vm.organizeItemsIntoCats(meal.items);
            });
            hall.meals.sort(function(a, b) {
                return a.type > b.type;
            });
        });
        vm.halls = halls;
        vm.loaded = true;
    });

    vm.organizeItemsIntoCats = function(items) {
        var cats = [];

        items.forEach(function(item) {
            var catFound = false;

            cats.some(function(cat) {
                if (cat.name === item.cat) {
                    catFound = true;

                    cat.items.push(item);

                    // Break
                    return true;
                }
            });

            if (!catFound) {
                cats.push({
                    name: item.cat,
                    items: [ item ]
                });
            }
        });

        return cats;
    };

    vm.findItem = function(itemId) {
        var found = false;

        vm.halls.some(function(hall) {
            hall.meals.some(function(meal) {
                meal.items.some(function(item) {
                    if (item._id === itemId) {
                        found = item;

                        // Break
                        return true;
                    }
                });

                if (found) {
                    // Break
                    return true;
                }
            });

            if (found) {
                // Break
                return true;
            }
        });

        return found;
    };

    vm.labelOpen = function(itemId) {
        $modal.open({
            animation: true,
            templateUrl: 'labelModal.html',
            controller: 'LabelModalInstanceCtrl as modal',
            size: 'lg',
            resolve: {
                item: function () {
                    return vm.findItem(itemId);
                }
            }
        });
    };
}

controllersModule.controller('TodayCtrl', TodayCtrl);
