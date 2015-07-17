'use strict';

var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function HallService($q, $http, AppSettings) {

    var factory = {};

    factory.get = function(name) {
        var deferred = $q.defer();

        $http.get(AppSettings.apiUrl + '/hall/' + name).success(function(data) {
            deferred.resolve(data);
        }).error(function(err, status) {
            deferred.reject(err, status);
        });

        return deferred.promise;
    };

    return factory;

}

servicesModule.factory('HallService', HallService);
