'use strict';

angular.module('fullstackApp')
  .controller('machineEditCtrl', function ($scope , machinesResource, $stateParams) {
    $scope.message = 'Hello';

    if($stateParams.id){
        machinesResource.get({ id: $stateParams.id}).$promise.then(function(response){
            $scope.machine = response;
        });
    }

    $scope.save = function(){
        machinesResource.save($scope.machine).$promise.then(function(response){
            $scope.machine = response;
        });
    };
  });
