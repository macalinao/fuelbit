angular.module('fuelbit')
  .controller('MainCtrl', function($scope, $location, vehicle, $ionicPopup) {
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
