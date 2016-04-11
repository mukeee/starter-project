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

    $scope.update = function() {
      machinesResource.update({id: $scope.machine._id, name: $scope.machine.name, info: $scope.machine.info,
           description: $scope.machine.description, machineOwner: $scope.machine.machineOwner,
           machineNumber: $scope.machine.machineNumber,
           clientName: $scope.machine.clientName, active: $scope.machine.active, }, function() {
      });
      };


      $scope.delete = function() {
              machinesResource.remove({id: $scope.machine._id}, function()
              {
              });
            };
  });
