'use strict';

describe('Controller: machineCtrl', function () {

  // load the controller's module
  beforeEach(module('fullstackApp'));

  var machineCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    machineCtrl = $controller('machineCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
