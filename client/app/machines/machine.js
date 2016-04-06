'use strict';

angular.module('fullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('machines', {
        url: '/machines',
        abstract: true,
        template: '<div ui-view></div>'
      })
      .state('machines.list', {
        url: '',
        controller: 'machineCtrl',
        templateUrl: 'app/machines/machine.html'
      })
      .state('machines.new', {
        url: '/new',
        controller: 'machineEditCtrl',
        templateUrl: 'app/machines/machineedit.html'
    }).state('machines.edit', {
      url: '/:id',
      controller: 'machineEditCtrl',
      templateUrl: 'app/machines/machineedit.html'
  });

  });
