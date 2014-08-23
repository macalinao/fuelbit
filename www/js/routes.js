angular.module('fuelbit')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'templates/main.html',
        controller: 'MainCtrl'
      })
      .state('setup', {
        url: '/setup',
        templateUrl: 'templates/setup.html',
        controller: 'SetupCtrl'
      })
      .state('setupdays', {
        url: '/setupdays',
        templateUrl: 'templates/setup.days.html',
        controller: 'SetupDaysCtrl'
      });
    $urlRouterProvider.otherwise('/');
  });
