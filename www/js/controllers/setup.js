angular.module('fuelbit')
  .controller('SetupCtrl', function($scope, $location, vehicle) {
    $scope.submit = function() {
      $location.path('/');
    };
  });
