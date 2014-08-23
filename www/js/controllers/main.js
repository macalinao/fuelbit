angular.module('fuelbit')
  .controller('MainCtrl', function($scope, $location, vehicle) {
    if (!vehicle.data) {
      $location.path('/setup');
    }
  });
