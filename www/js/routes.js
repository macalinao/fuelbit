angular.module('link')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('start', {
        url: '/',
        templateUrl: 'templates/start.html',
        controller: 'StartCtrl'
      });
    $urlRouterProvider.otherwise('/');
  });
