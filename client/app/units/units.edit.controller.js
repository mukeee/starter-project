'use strict';

angular.module('fullstackApp')
  .controller('UnitsEditCtrl', function ($scope , $state, UnitsResource, $stateParams) {
    $scope.message = 'Hello';

    if($stateParams.id){
        UnitsResource.get({ id: $stateParams.id}).$promise.then(function(response){
            $scope.unit = response;
        });
    }

    $scope.save = function(){
      if($stateParams.id){
        UnitsResource.update({ id: $stateParams.id} , $scope.unit).$promise.then(function(response){
                 $scope.unit = response;
        });
      }else {
             UnitsResource.save( $scope.unit).$promise.then(function(response){
                $state.go('units.edit' , { id: response._id} );
                 $scope.unit = response;
             });
 }

};
   });
