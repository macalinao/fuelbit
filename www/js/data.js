angular.module('fuelbit')
  .factory('Data', function() {
    return {
      vehicle: {
        model: 'Model T',
        year: '1920',
        cityMpg: 15,
        highwayMpg: 40,
        recordedMiles: 900,
        maintenanceNeeded: true
      },
      days: [{
        gas: 1.01,
        dist: 12,
        time: 32,
        date: '8/20/2014'
      }, {
        gas: 1.51,
        dist: 18,
        time: 50,
        date: '8/21/2014'
      }, {
        gas: 0.53,
        dist: 6,
        time: 20,
        date: '8/22/2014'
      }, {
        gas: 0.75,
        dist: 12,
        time: 32,
        date: '8/23/2014'
      }, {
        gas: 2.2,
        dist: 27,
        time: 84,
        date: '8/24/2014'
      }],
      average: function() {
        return _.reduce(this.days, function(sum, day) {
          return sum + day.gas;
        }, 0) / this.days.length;
      }
    };
  });
