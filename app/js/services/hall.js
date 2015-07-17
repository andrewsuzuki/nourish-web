'use strict';

var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function HallService($q, $http, AppSettings) {

    var service = {};

    service.get = function() {
        var deferred = $q.defer();

        $http.get(AppSettings.apiUrl + '/halls').success(function(data) {
            console.log(data);
            deferred.resolve(data);
        }).error(function(err, status) {
            deferred.reject(err, status);
        });

        return deferred.promise;
    };

    return service;

}

servicesModule.service('HallService', HallService);
