'use strict';

angular.module('fullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('units', {
        url: '/units',
        abstract: true,
        template: '<div ui-view></div>'
      })
      .state('units.list', {
        url: '',
        controller: 'UnitsCtrl',
        templateUrl: 'app/units/units.html'
      })
      .state('units.new', {
        url: '/new',
        controller: 'UnitsEditCtrl',
        templateUrl: 'app/units/UnitsEdit.html'
    });

  });
