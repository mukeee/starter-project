'use strict';

angular.module('fullstackApp')
.factory('unitsResource', function ($resource) {
    return $resource('/api/unitss/:id/', {
        id: '@id'
    },{
        update: {
            method: 'PUT'
        }
    });
});
