app.controller('HomeController',
  ['$scope', function($scope) {
    $scope.numbers = [];
    $scope.counter = 0;
    $scope.loadMore = function () {
      for (var i = 0; i < 2; i++) {
          $scope.numbers.push(++$scope.counter);
      };
    };
    $scope.loadMore();
    $scope.cartoons = [
    // make json
    // ng repeat attached to event handler
     
    ];
  }]);
