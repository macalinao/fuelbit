angular.module('fuelbit')
  .controller('MainCtrl', function($scope, $location, Data) {
    $scope.vehicle = Data.vehicle;

    $scope.Data = Data;

    $scope.onHomeTab = function() {
      setTimeout(function() {
        $('#overviewGraph').kendoChart({
          title: 'Last 30 Days Overview - Gallons Used Per Day',
          series: [{
            data: _.map(Data.days, function(day) {
              return day.gas;
            })
          }]
        });
      }, 0);
    };
    $scope.onHomeTab();

    $scope.data = {};

    $scope.gasUsage = function() {
      setTimeout(function() {
        $('#gasUsage').kendoChart();
      }, 0);
    };
  });
