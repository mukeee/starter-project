'use strict';

angular.module('fullstackApp')
.factory('machinesResource', function ($resource) {
    return $resource('/api/machines/:id/', {
        id: '@id'
    },{
        update: {
            method: 'PUT'
        }
    });
});
