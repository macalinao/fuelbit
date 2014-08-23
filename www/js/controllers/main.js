angular.module('fuelbit')
  .controller('MainCtrl', function($scope, $location, vehicle) {
    if (!vehicle.data) {
      vehicle.initData();
      // $location.path('/setup');
      // return;
    }
    $scope.vehicle = vehicle.data.vehicle;

    $scope.onHomeTab = function() {
      setTimeout(function() {
        $('#budgetDial').kendoRadialGauge({
          pointer: {
            value: 50
          },
          scale: {
            min: 0,
            max: 100,
            labels: {
              format: 'C'
            }
          }
        });
      }, 0);
    };
    $scope.onHomeTab();

    $scope.gasUsage = function() {
      setTimeout(function() {
        $('#gasUsage').kendoChart();
      }, 0);
    };
  });
