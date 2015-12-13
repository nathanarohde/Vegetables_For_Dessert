(function() {
  'use strict';

  app
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', '$http', 'imageLoaderService'];

  function HomeController($scope, $http, imageLoaderService) {

    // function loadMore() {
		imageLoaderService.getPromise().then(function(data){
			$scope.cartoons = data.data.cartoons;
		});
	// }
  }
})();