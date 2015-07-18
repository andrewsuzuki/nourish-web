'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function HallCtrl($stateParams, $location, $modal, HallService, AppSettings) {

    // ViewModel
    var vm = this;

    vm.foundHall = false;

    vm.loaded = false;

    vm.normalizeDate = function(date) {
        return (new Date(date)).toDateString();
    };

    vm.displayDate = function(date) {
        var ndate = vm.normalizeDate(date);
        var today = vm.normalizeDate(new Date());

        if (ndate === today) {
            return 'Today';
        } else {
            return ndate;
        }
    };

    vm.organizeMealsIntoDays = function(meals) {
        var days = [];

        meals.forEach(function(meal) {
            var dayFound = false;

            meal.cats = vm.organizeItemsIntoCats(meal.items);

            days.some(function(day) {
                if (vm.normalizeDate(day.date) === vm.normalizeDate(meal.date)) {
                    dayFound = true;

                    day.meals.push(meal);

                    // Break
                    return true;
                }
            });

            if (!dayFound) {
                days.push({
                    date: meal.date,
                    meals: [ meal ]
                });
            }
        });

        // Sort by Breakfast, Lunch, Dinner
        days.forEach(function(day) {
            day.meals.sort(function(a, b) {
                return a.type > b.type;
            });
        });

        return days;
    };

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

        vm.days.some(function(day) {
            day.meals.some(function(meal) {
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

    vm.mealType = function(mealTypeId) {
        return AppSettings.mealTypes[mealTypeId];
    };

    AppSettings.halls.some(function(hall) {
        if (hall.slug === $stateParams.hallName) {
            vm.foundHall = true;
            // Grab hall name and slug fron constants
            vm.name = hall.name;
            vm.slug = hall.slug;

            // Get hall with populated meals and items
            HallService.get(vm.name).then(function(hall) {
                vm.days = vm.organizeMealsIntoDays(hall.meals);
                vm.loaded = true;
            });
            // TODO: handle error

            // Break
            return true;
        }
    });

    if (!vm.foundHall) {
        $location.url('/').replace();
    }

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

controllersModule.controller('HallCtrl', HallCtrl);
