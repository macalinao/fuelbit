angular.module('fuelbit')
  .controller('SetupCtrl', function($scope, $location, vehicle) {
    $scope.cfg = {};
    $scope.submit = function() {
      vehicle.cfg = $scope.cfg;
      $location.path('/');
    };
  });
