'use strict';

var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function ItemService($q, $http, AppSettings) {

    var factory = {};

    factory.getToday = function(name) {
        var deferred = $q.defer();

        $http.get(AppSettings.apiUrl + '/today').success(function(data) {
            deferred.resolve(data);
        }).error(function(err, status) {
            deferred.reject(err, status);
        });

        return deferred.promise;
    };

    return factory;

}

servicesModule.factory('ItemService', ItemService);
