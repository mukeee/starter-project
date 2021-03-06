'use strict';

angular.module('fullstackApp')
.factory('UnitsResource', function ($resource) {
    return $resource('/api/units/:id/', {
        id: '@id'
    },{
        update: {
            method: 'PUT'
        }
    });
});
