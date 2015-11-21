// original
app.controller('HomeController', function($scope, $http) {
    $scope.numbers = [];
    $scope.counter = 0;
    $scope.loadMore = function () {
      for (var i = 0; i < 2; i++) {
          $scope.numbers.push(++$scope.counter);
      };
    };
    $scope.loadMore();
    $http.get('dir/cartoons.json').success(function(result){
        $scope.cartoons = result.cartoons;
      });
  });

// 11/1
// app.controller('HomeController', function($scope, $http) {
//     $scope.numbers = [];
//     $scope.counter = 0;
//     $scope.loadMore = function () {
//       return $http.get('dir/cartoons.json').success(function(result){
//           $scope.cartoons = result.cartoons;
//         });
//     };
//     // ng repeat attached to event handler
//   });

// possibly useful?
//  $scope.data = [];
//   return $scope.loadNew = function(deferredObj) {
//     return deferredObj.resolve();
//   };

// 11/6
// app.controller('HomeController', ['$scope','$http','loadMore', function ($scope, loadMore) {
//    $scope.callLoadMore = function(cartoon) {
//      return loadMore(cartoon);
//    };
//  }]).
// factory('loadMore', ['$http', '$scope' function($http, $scope) {
//    return $http.get('dir/cartoons.json').success(function(result){
//           $scope.cartoons = result.cartoons;
//         });
//  }]);

// https://docs.angularjs.org/guide/services

// angular.
// module('myServiceModule', []).
//  controller('MyController', ['$scope','notify', function ($scope, notify) {
//    $scope.callNotify = function(msg) {
//      notify(msg);
//    };
//  }]).
// factory('notify', ['$window', function(win) {
//    var msgs = [];
//    return function(msg) {
//      msgs.push(msg);
//      if (msgs.length == 3) {
//        win.alert(msgs.join("\n"));
//        msgs = [];
//      }
//    };
//  }]);
