angular.module('fuelbit')
  .controller('SetupCtrl', function($scope, $location, vehicle) {
    $scope.cfg = {};
    $scope.submit = function() {
      vehicle.cfg = $scope.cfg;
      vehicle.data = $scope.cfg;
      $location.path('/setupdays');
    };
  })
  .controller('SetupDaysCtrl', function($scope, $location, vehicle) {
    if (!vehicle.cfg) {
      $location.path('/setup');
      return;
    }
    $scope.days = [
      'Monday',
      'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
    ];
    $scope.schedule = {};
    $scope.submit = function() {
      vehicle.cfg.schedule = $scope.schedule;
      $location.path('/');
    };
  });
