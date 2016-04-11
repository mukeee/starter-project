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

    $scope.update = function() {
      UnitsResource.update({id: $scope.unit._id, name: $scope.unit.name, info: $scope.unit.info,
           description: $scope.unit.description, unitOwner: $scope.unit.unitOwner,unitNumber: $scope.unit.unitNumber,
           clientName: $scope.unit.clientName, active: $scope.unit.active, }, function() {
      });
      };


      $scope.delete = function() {
              UnitsResource.remove({id: $scope.unit._id}, function()
              {
              });
            };
  });
