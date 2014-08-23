angular.module('energypal')
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
      });

    $urlRouterProvider.otherwise('/');
  });
