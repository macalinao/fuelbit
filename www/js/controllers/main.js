angular.module('fuelbit')
  .controller('MainCtrl', function($scope, $location, vehicle) {
    if (!vehicle.data) {
      vehicle.initData();
      //$location.path('/setup');
    }
    $scope.vehicle = vehicle.data.vehicle;
  });
