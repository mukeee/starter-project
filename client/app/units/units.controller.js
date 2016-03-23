'use strict';

angular.module('fullstackApp')
  .controller('UnitsCtrl', function ($scope , $state , unitsResource) {
    $scope.message = 'Hello';

    unitsResource.query().$promise.then(function (response) {
        $scope.units = response;
    });

    $scope.newUnit = function(){
        $state.go('units.new');
    };
  });
