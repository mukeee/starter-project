'use strict';

angular.module('fullstackApp')
  .controller('machineEditCtrl', function ($scope , $state, machinesResource, $stateParams) {
    $scope.message = 'Hello';

    if($stateParams.id){
        machinesResource.get({ id: $stateParams.id}).$promise.then(function(response){
            $scope.machine = response;
        });
    }

    $scope.save = function(){
      if($stateParams.id) {
        machinesResource.update({ id: $stateParams.id} , $scope.machine).$promise.then(function(response){
            $scope.machine = response;
        });
      }else {
             machinesResource.save( $scope.machine).$promise.then(function(response){
                $state.go('machines.edit' , { id: response._id} );
                 $scope.machine = response;
             });
  }

  };
   });
