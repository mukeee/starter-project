'use strict';

angular.module('fullstackApp')
  .controller('UnitsEditCtrl', function ($scope , UnitsResource, $stateParams) {
    $scope.message = 'Hello';

    if($stateParams.id){
        UnitsResource.get({ id: $stateParams.id}).$promise.then(function(response){
            $scope.unit = response;
        });
    }

    $scope.save = function(){
        UnitsResource.save($scope.unit).$promise.then(function(response){
            $scope.unit = response;
        });
    };
  });
