angular.module('fuelbit')
  .factory('Data', function() {
    return {
      vehicle: {
        model: 'Bugatti',
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
        date: '7/20/2014'
      }, {
        gas: 1.51,
        dist: 18,
        time: 50,
        date: '7/21/2014'
      }, {
        gas: 0.53,
        dist: 6,
        time: 20,
        date: '7/22/2014'
      }, {
        gas: .75,
        dist: 12,
        time: 32,
        date: '7/23/2014'
      }, {
        gas: 2.2,
        dist: 27,
        time: 84,
        date: '7/24/2014'
      }, {
        gas: 1.62,
        dist: 16,
        time: 40,
        date: '7/25/2014'
      }, {
        gas: 1.21,
        dist: 14,
        time: 43,
        date: '7/26/2014'
      }, {
        gas: .89,
        dist: 11,
        time: 20,
        date: '7/27/2014'
      }, {
        gas: .42,
        dist: 13,
        time: 18,
        date: '7/28/2014'
      }, {
        gas: 3.2,
        dist: 67,
        time: 110,
        date: '7/29/2014'
      }, {
        gas: 1.40,
        dist: 42,
        time: 52,
        date: '7/30/2014'
      }, {
        gas: 1.72,
        dist: 36,
        time: 60,
        date: '7/31/2014'
      }, {
        gas: 0.53,
        dist: 6,
        time: 20,
        date: '8/01/2014'
      }, {
        gas: 0.75,
        dist: 12,
        time: 32,
        date: '8/02/2014'
      }, {
        gas: 2.2,
        dist: 27,
        time: 84,
        date: '8/03/2014'
      }, {
        gas: 1.01,
        dist: 12,
        time: 32,
        date: '8/04/2014'
      }, {
        gas: 1.51,
        dist: 18,
        time: 50,
        date: '8/05/2014'
      }, {
        gas: 0.53,
        dist: 6,
        time: 20,
        date: '8/06/2014'
      }, {
        gas: 0.98,
        dist: 16,
        time: 21,
        date: '8/07/2014'
      }, {
        gas: 0.78,
        dist: 19,
        time: 47,
        date: '8/08/2014'
      }, {
        gas: 1.8,
        dist: 70,
        time: 68,
        date: '8/09/2014'
      }, {
        gas: 1.6,
        dist: 64,
        time: 66,
        date: '8/10/2014'
      }, {
        gas: 0.12,
        dist: 4,
        time: 5,
        date: '8/11/2014'
      }, {
        gas: .36,
        dist: 6,
        time: 10,
        date: '8/12/2014'
      }, {
        gas: 1.54,
        dist: 53,
        time: 47,
        date: '8/13/2014'
      }, {
        gas: 1.12,
        dist: 12,
        time: 32,
        date: '8/14/2014'
      }, {
        gas: 1.81,
        dist: 81,
        time: 70,
        date: '8/15/2014'
      }, {
        gas: 0.44,
        dist: 17,
        time: 26,
        date: '8/16/2014'
      }, {
        gas: 0.75,
        dist: 12,
        time: 32,
        date: '8/17/2014'
      }, {
        gas: 1.3,
        dist: 28,
        time: 32,
        date: '8/18/2014'
      }, {
        gas: 1,
        dist: 16,
        time: 32,
        date: '8/19/2014'
      }, {
        gas: 0.72,
        dist: 18,
        time: 50,
        date: '8/20/2014'
      }, {
        gas: 1.86,
        dist: 44,
        time: 65,
        date: '8/21/2014'
      }, {
        gas: 0.11,
        dist: 5,
        time: 7,
        date: '8/22/2014'
      }, {
        gas: 2.2,
        dist: 27,
        time: 84,
        date: '8/23/2014'
      }, {
        gas: 1.19,
        dist: 12,
        time: 32,
        date: '8/24/2014'
      }, {
        gas: 1.77,
        dist: 39,
        time: 58,
        date: '8/25/2014'
      }, {
        gas: 0.53,
        dist: 6,
        time: 20,
        date: '8/26/2014'
      }, {
        gas: 2.67,
        dist: 64,
        time: 90,
        date: '8/27/2014'
      }],
      averageMpg: function() {
        return (this.averageMiles() / this.average()).toFixed(2);
      },
      average: function() {
        return (this.total() / this.days.length).toFixed(2);
      },
      averageMiles: function() {
        return (this.totalMiles() / this.days.length).toFixed(2);
      },
      total: function() {
        return _.reduce(this.days, function(sum, day) {
          return sum + day.gas;
        }, 0).toFixed(2);
      },
      totalMiles: function() {
        return _.reduce(this.days, function(sum, day) {
          return sum + day.dist;
        }, 0).toFixed(2);
      },
      daysOfWeek: function(dotw) {
        return _.filter(this.days, function(day) {
          return moment(day.date).day() !== dotw;
        });
      },
      totalDay: function(dotw) {
        return _.reduce(this.daysOfWeek(dotw), function(sum, day) {
          return sum + day.gas;
        }, 0);
      },
      avgDay: function(dotw) {
        return this.totalDay(dotw) / this.daysOfWeek(dotw).length;
      },
      nextFuelDay: function() {
        var fuelLvlInput = 0.75; // 75% full
        var fuelUsed = 14; // gal
        var avgGalDay = this.average();

        var fullTank = fuelUsed / (1 - fuelLvlInput);
        var x = fullTank / avgGalDay;
        var usedFuelLvl = fuelLvlInput * fullTank;
        var daysLeft = x - (usedFuelLvl / avgGalDay);
        return Math.floor(daysLeft);
      }
    };
  });
