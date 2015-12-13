angular.module('App')
  .service('myService', function($http){
    this.myMethods = {
 
      getPromise: function() {
        var promise = $http.get('dir/cartoons.json');
 
    }
  }
 
   return myMethods;
 
  });