angular.module('fuelbit')
  .controller('MainCtrl', function($scope, $location, $ionicPopup, Data) {
    $scope.vehicle = Data.vehicle;

    $scope.onHomeTab = function() {
      setTimeout(function() {
        $('#overviewGraph').kendoChart({
          title: 'Overview',
          series: [{
            data: _.map(Data.days, function(day) {
              return day.gas;
            })
          }],
          categoryAxis: {
            categories: _.map(Data.days, function(day) {
              return day.date;
            })
          }
        });
      }, 0);
    };
    $scope.onHomeTab();

    $scope.data = {};
    $scope.budgetPopup = function() {
      $ionicPopup.show({
        template: '<input type="text" ng-model="data.budget">',
        title: 'Set Budget',
        subTitle: 'Please enter an allotted budget for gas. This will "fill" up your budget gauge. Driving subtracts from the gauge until it reaches $0.',
        scope: $scope,
        buttons: [{
          text: 'Set',
          type: 'button-positive',
          onTap: function(e) {
            if (!$scope.data.budget) {
              e.preventDefault();
            } else {
              return $scope.data.budget;
            }
          }
        }]
      }).then(function(res) {
        var dial = $('#budgetDial').data('kendoRadialGauge');
        dial.options.scale.max = res;
        dial.options.pointer.value = res;
        dial.redraw();
      });
    };

    $scope.gasUsage = function() {
      setTimeout(function() {
        $('#gasUsage').kendoChart();
      }, 0);
    };
  });
