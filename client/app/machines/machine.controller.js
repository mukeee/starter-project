'use strict';

angular.module('fullstackApp')
  .controller('machineCtrl', function ($scope, $state, $stateParams ,machinesResource) {
      //This is how we are getting data from resource,
      // you need to execute query method on resource to get list of all data
    machinesResource.query().$promise.then(function (response) {
        $scope.machines = response;
    });

    $scope.new = function() {
        $state.go('machines.new');
    };

    $scope.edit = function(id) {
        $state.go('machines.edit', {id: id});
    };

  });
