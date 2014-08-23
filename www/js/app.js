angular.module('fuelbit', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
})
  .factory('vehicle', function() {
    return {
      initData: function() {
        this.data = {
          vehicle: {
            model: 'Model T',
            year: '1920',
            cityMpg: 15,
            highwayMpg: 40,
            recordedMiles: 900,
            maintenanceNeeded: true
          }
        };
      }
    };
  });
