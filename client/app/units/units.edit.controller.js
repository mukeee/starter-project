'use strict';

angular.module('fullstackApp')
  .controller('UnitsEditCtrl', function ($scope , unitsResource) {
    $scope.message = 'Hello';

    $scope.save = function(){
        unitsResource.save($scope.unit).$promise.then(function(response){
            console.log(response);
            $scope.unit = response;
        });
    };
  });
