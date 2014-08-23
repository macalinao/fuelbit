angular.module('fuelbit')
  .controller('MainCtrl', function($scope, $location, vehicle) {
    if (!vehicle.data) {
      vehicle.initData();
      // $location.path('/setup');
      // return;
    }
    $scope.vehicle = vehicle.data.vehicle;
    $scope.gasUsage = function() {
      setTimeout(function() {
        $('#gasUsage').kendoChart();
      }, 0);
    };
  });
