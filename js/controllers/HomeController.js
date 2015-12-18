(function() {
  'use strict';

  app
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', '$http', 'imageLoaderService'];

  function HomeController($scope, $http, imageLoaderService) {

    $scope.totalDisplayed = 0;
    $scope.loadMore = loadMore;

    function loadMore() {
      imageLoaderService.getPromise().then(function(data){
          $scope.cartoons = data.data.cartoons;
      });
      $scope.totalDisplayed += 1;
    }

    // function loadMore(){
    //     var last = $scope.cartoons[$scope.cartoons.length - 1];
    //       for(var i = 1; i <= 190; i++) {
    //         $scope.cartoons.push(last + i);
    //       }
    // }
     // $scope.images = [1, 2, 3, 4, 5, 6, 7, 8];

  // $scope.loadMore = function() {
  //   var last = $scope.images[$scope.images.length - 1];
  //   for(var i = 1; i <= 8; i++) {
  //     $scope.images.push(last + i);
  //   }
  // };

  }

})();