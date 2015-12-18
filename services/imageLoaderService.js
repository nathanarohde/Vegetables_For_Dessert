(function() {
  'use strict';
  app
    .service('imageLoaderService', imageLoaderService);

  imageLoaderService.$inject = ['$http'];

  function imageLoaderService($http) {
    var service = {
 
      getPromise: getPromise

    };
 
   return service;

   //////////////////////////////

   function getPromise() {
        return $http.get('dir/cartoons.json');
    }
  }

})();