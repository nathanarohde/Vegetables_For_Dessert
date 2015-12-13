// original
// angular.module("App")
// .controller('HomeController', ['$scope', 'myService', function($scope, myService){
//   var $scope.success = false,
//   var $scope.error = false;

//   var askForPromise = myService.getPromise();

//     askForPromise.then(
//       // OnSuccess function
//       function(answer) {
//         $scope.somethingRight = answer;
//         $scope.success = true;
//       },
//       // OnFailure function
//       function(reason) {
//         $scope.somethingWrong = reason;
//         $scope.error = true;
//       }
//     )
//   }]);
// }]);


/// NOTES:
//// to run a local node server all
//// you have to do is cd into the root 
//// of your project (i.e. Vegetables_For_Dessert)
//// and type in 'http-server -o'


app.controller('HomeController', function($scope, $http) {
    // $scope.numbers = [];
    // $scope.counter = 0;
    // $scope.loadMore = function () {
    //   for (var i = 0; i < 2; i++) {
    //       $scope.numbers.push(++$scope.counter);
    //   };
    // };
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
