'use strict';

var servicesModule = require('./_index.js');
var moment = require('moment');

/**
 * @ngInject
 */
function ItemService($q, $http, AppSettings) {

    var dataLoaded = false;

    var data = {
        all: [],
        halls: {},
        meals: {},
        items: {}
    };

    // Get initial data, then organize
    function setup() {
        if (!dataLoaded) {
            return getInit().then(function(hallsRaw) {
                // Store raw halls -> meals -> items
                data.all = hallsRaw;

                // Associate items with their parent meals and halls
                var items = {};
                hallsRaw.forEach(function(hall) {
                    data.halls[hall._id] = hall;

                    hall.meals.forEach(function(meal) {
                        // Convert meal type id to meal type string
                        meal.type = mealType(meal.type);

                        data.meals[meal._id] = meal;

                        meal.items.forEach(function(item) {
                            if (!items.hasOwnProperty(item._id)) {
                                items[item._id] = item;
                                items[item._id].hallmeals = [];
                            }

                            items[item._id].hallmeals.push({
                                'hall': hall._id,
                                'meal': meal._id
                            });
                        });
                    });
                });

                data.items = items;

                dataLoaded = true;

                return data;
            });
        } else {
            var deferred = $q.defer();
            deferred.resolve(data);
            return deferred.promise;
        }
    }

    // Get initial data from API
    function getInit() {
        var deferred = $q.defer();

        $http.get(AppSettings.apiUrl + '/init').success(function(data) {
            deferred.resolve(data);
        }).error(function(err, status) {
            deferred.reject(err, status);
        });

        return deferred.promise;
    }

    function mealType(mealTypeId) {
        return AppSettings.mealTypes[mealTypeId];
    };

    // Factory

    var factory = {};

    factory.allHalls = function() {
        return setup().then(function(data) {
            return Object.keys(data.halls).map(function(k) { return data.halls[k] });
        });
    };

    factory.allMeals = function() {
        return setup().then(function(data) {
            return Object.keys(data.meals).map(function(k) { return data.meals[k] });
        });
    };

    factory.today = function() {
        return setup().then(function(data) {
            var halls = [];

            //var today = moment().startOf('day');
            var today = moment('2015-07-08').startOf('day');

            data.all.forEach(function(hall) {
                var newHall = {
                    __v: hall.__v,
                    _id: hall._id,
                    name: hall.name,
                    meals: []
                };

                hall.meals.forEach(function(meal) {
                    if (moment(meal.date).startOf('day').isSame(today)) {
                        newHall.meals.push(meal);
                    }
                });

                if (newHall.meals.length) {
                    halls.push(newHall);
                }
            });

            return halls;
        });
    };

    factory.allItems = function() {
        return setup().then(function(data) {
            return Object.keys(data.items).map(function(k) { return data.items[k] });
        });
    };

    factory.hall = function(hallId) {
        return data.halls[hallId];
    };

    factory.meal = function(mealId) {
        return data.meals[mealId];
    };

    factory.item = function(itemId) {
        return data.items[itemId];
    };

    return factory;
}

servicesModule.factory('ItemService', ItemService);
