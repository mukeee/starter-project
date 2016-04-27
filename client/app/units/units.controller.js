'use strict';

angular.module('fullstackApp')
  .controller('UnitsCtrl', function ($scope , $state , UnitsResource) {

      //This is how we are getting data from resource,
      // you need to execute query method on resource to get list of all data
    $scope.getUnits = function functionname() {
    UnitsResource.query().$promise.then(function (response) {
        $scope.units = response;
    });

  }
   $scope.newUnit = function(){
        $state.go('units.new');
    };

    $scope.editUnit = function(unitId){
        $state.go('units.edit', {id: unitId});
    };

    $scope.delete = function(unitId) {
        UnitsResource.delete({id : unitId}).$promise.then(function(){
            $scope.getUnits();
        });
};

        $scope.getUnits();

  });
