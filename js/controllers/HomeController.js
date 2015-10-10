app.controller('HomeController',
  ['$scope', function($scope) {
    $scope.cartoons = [
      { title: 'cartoon5',
        image: 'cartoons/VFD_0005.jpg',
        alt:'',
        number:'0005'
      },
      { title: 'cartoon4',
        image: 'cartoons/VFD_0004.jpg',
        alt:'',
        number:'0004'
      },
      { title: 'cartoon3',
        image: 'cartoons/VFD_0003.jpg',
        alt:'',
        number:'0003'
      },
      { title: 'cartoon2',
        image: 'cartoons/VFD_0002.jpg',
        alt:'',
        number:'0002'
      },
      { title: 'cartoon1',
        image: 'cartoons/VFD_0001.jpg',
        alt:'',
        number:'0001'
      }
    ];
  }]);
