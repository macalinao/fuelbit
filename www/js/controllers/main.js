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

    $scope.fieldClasses = {
      one: {
        gas: '',
        dist: '',
        time: ''
      },
      two: {
        gas: '',
        dist: '',
        time: ''
      }
    };

    $scope.compareDate = {};
    $scope.setDate = function(d) {
      var ret = _.find(Data.days, function(day) {
        return day.date === $scope.compareDate[d];
      });
      if (ret) {
        $scope.compareDays[d] = ret;
        if ($scope.compareDays.one && $scope.compareDays.two) {
          $scope.compareGraph();
          // compare stuff and save winner/losers
          var one = $scope.compareDays.one;
          var two = $scope.compareDays.two;
          if (one.gas < two.gas) {
            $scope.fieldClasses.one.gas = 'winner';
            $scope.fieldClasses.two.gas = 'loser';
          } else {
            $scope.fieldClasses.one.gas = 'loser';
            $scope.fieldClasses.two.gas = 'winner';
          }
          if (one.dist < two.dist) {
            $scope.fieldClasses.one.dist = 'winner';
            $scope.fieldClasses.two.dist = 'loser';
          } else {
            $scope.fieldClasses.one.dist = 'loser';
            $scope.fieldClasses.two.dist = 'winner';
          }
          if (one.time < two.time) {
            $scope.fieldClasses.one.time = 'winner';
            $scope.fieldClasses.two.time = 'loser';
          } else {
            $scope.fieldClasses.one.time = 'loser';
            $scope.fieldClasses.two.time = 'winner';
          }
        }
      }
    };

    $scope.compareDays = {};
    $scope.compareGraph = function() {
      var one = $scope.compareDays.one;
      var two = $scope.compareDays.two;

      $('#compareGraph').kendoChart({
        title: 'Day Comparison',
        legend: {
          visible: false
        },
        seriesDefaults: {
          type: 'bar'
        },
        series: [{
          name: 'Day One',
          data: [one.gas, one.dist, one.time]
        }, {
          name: 'Day Two',
          data: [two.gas, two.dist, two.time]
        }],
        categoryAxis: [{
          categories: ['Gas', 'Distance', 'Time']
        }],
        tooltip: {
          visible: true,
          template: "#= series.name #: #= value #"
        }
      });
    };

    $scope.data = {};
  });
