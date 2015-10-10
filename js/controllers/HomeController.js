app.controller('HomeController',
  ['$scope', function($scope) {
    $scope.cartoons = [
      { title: 'cartoon5',
        image: 'cartoons/VFD_0005.jpg'},
      { title: 'cartoon4',
        image: 'cartoons/VFD_0004.jpg'},
      { title: 'cartoon3',
        image: 'cartoons/VFD_0003.jpg'},
      { title: 'cartoon2',
        image: 'cartoons/VFD_0002.jpg'},
      { title: 'cartoon1',
        image: 'cartoons/VFD_0001.jpg'}
    ];
  }]);
