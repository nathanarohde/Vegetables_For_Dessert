app.controller('HomeController',
  ['$scope', function($scope) {
    $scope.cartoons = [
      { title: 'cartoon79',
        image: 'cartoons/VFD_0079.jpg',
        alt:'',
        number:'0079'
      },
      { title: 'cartoon78',
        image: 'cartoons/VFD_0078.jpg',
        alt:'',
        number:'0078'
      },
      { title: 'cartoon77',
        image: 'cartoons/VFD_0077.jpg',
        alt:'',
        number:'0077'
      },
      { title: 'cartoon76',
        image: 'cartoons/VFD_0076.jpg',
        alt:'',
        number:'0076'
      },
      { title: 'cartoon75',
        image: 'cartoons/VFD_0075.jpg',
        alt:'',
        number:'0075'
      },
      { title: 'cartoon74',
        image: 'cartoons/VFD_0074.jpg',
        alt:'',
        number:'0074'
      },
      { title: 'cartoon73',
        image: 'cartoons/VFD_0073.jpg',
        alt:'',
        number:'0073'
      },
      { title: 'cartoon72',
        image: 'cartoons/VFD_0072.jpg',
        alt:'',
        number:'0072'
      },
      { title: 'cartoon71',
        image: 'cartoons/VFD_0071.jpg',
        alt:'',
        number:'0071'
      },
      { title: 'cartoon70',
        image: 'cartoons/VFD_0070.jpg',
        alt:'',
        number:'0070'
      },
      { title: 'cartoon69',
        image: 'cartoons/VFD_0069.jpg',
        alt:'',
        number:'0069'
      },
      { title: 'cartoon68',
        image: 'cartoons/VFD_0068.jpg',
        alt:'',
        number:'0068'
      },
      { title: 'cartoon67',
        image: 'cartoons/VFD_0067.jpg',
        alt:'',
        number:'0067'
      },
      { title: 'cartoon66',
        image: 'cartoons/VFD_0066.jpg',
        alt:'',
        number:'0066'
      },
      { title: 'cartoon65',
        image: 'cartoons/VFD_0065.jpg',
        alt:'',
        number:'0065'
      },
      { title: 'cartoon64',
        image: 'cartoons/VFD_0064.jpg',
        alt:'',
        number:'0064'
      },
      { title: 'cartoon63',
        image: 'cartoons/VFD_0063.jpg',
        alt:'',
        number:'0063'
      },
      { title: 'cartoon62',
        image: 'cartoons/VFD_0062.jpg',
        alt:'',
        number:'0062'
      },
      { title: 'cartoon61',
        image: 'cartoons/VFD_0061.jpg',
        alt:'',
        number:'0061'
      },
      { title: 'cartoon60',
        image: 'cartoons/VFD_0060.jpg',
        alt:'',
        number:'0060'
      },
      { title: 'cartoon59',
        image: 'cartoons/VFD_0059.jpg',
        alt:'',
        number:'0059'
      },
      { title: 'cartoon58',
        image: 'cartoons/VFD_0058.jpg',
        alt:'',
        number:'0058'
      },
      { title: 'cartoon57',
        image: 'cartoons/VFD_0057.jpg',
        alt:'',
        number:'0057'
      },
      { title: 'cartoon56',
        image: 'cartoons/VFD_0056.jpg',
        alt:'',
        number:'0056'
      },
      { title: 'cartoon55',
        image: 'cartoons/VFD_0055.jpg',
        alt:'',
        number:'0055'
      },
      { title: 'cartoon54',
        image: 'cartoons/VFD_0054.jpg',
        alt:'',
        number:'0054'
      },
      { title: 'cartoon53',
        image: 'cartoons/VFD_0053.jpg',
        alt:'',
        number:'0053'
      },
      { title: 'cartoon52',
        image: 'cartoons/VFD_0052.jpg',
        alt:'',
        number:'0052'
      },
      { title: 'cartoon51',
        image: 'cartoons/VFD_0051.jpg',
        alt:'',
        number:'0051'
      },
      { title: 'cartoon50',
        image: 'cartoons/VFD_0050.jpg',
        alt:'',
        number:'0050'
      },
      { title: 'cartoon49',
        image: 'cartoons/VFD_0049.jpg',
        alt:'',
        number:'0049'
      },
      { title: 'cartoon48',
        image: 'cartoons/VFD_0048.jpg',
        alt:'',
        number:'0048'
      },
      { title: 'cartoon47',
        image: 'cartoons/VFD_0047.jpg',
        alt:'',
        number:'0047'
      },
      { title: 'cartoon46',
        image: 'cartoons/VFD_0046.jpg',
        alt:'',
        number:'0046'
      },
      { title: 'cartoon45',
        image: 'cartoons/VFD_0045.jpg',
        alt:'',
        number:'0045'
      },
      { title: 'cartoon44',
        image: 'cartoons/VFD_0044.jpg',
        alt:'',
        number:'0044'
      },
      { title: 'cartoon43',
        image: 'cartoons/VFD_0043.jpg',
        alt:'',
        number:'0043'
      },
      { title: 'cartoon42',
        image: 'cartoons/VFD_0042.jpg',
        alt:'',
        number:'0042'
      },
      { title: 'cartoon41',
        image: 'cartoons/VFD_0041.jpg',
        alt:'',
        number:'0041'
      },
      { title: 'cartoon40',
        image: 'cartoons/VFD_0040.jpg',
        alt:'',
        number:'0040'
      },
      { title: 'cartoon39',
        image: 'cartoons/VFD_0039.jpg',
        alt:'',
        number:'0039'
      },
      { title: 'cartoon38',
        image: 'cartoons/VFD_0038.jpg',
        alt:'',
        number:'0038'
      },
      { title: 'cartoon37',
        image: 'cartoons/VFD_0037.jpg',
        alt:'',
        number:'0037'
      },
      { title: 'cartoon36',
        image: 'cartoons/VFD_0036.jpg',
        alt:'',
        number:'00036'
      },
      { title: 'cartoon35',
        image: 'cartoons/VFD_0035.jpg',
        alt:'',
        number:'0035'
      },
      { title: 'cartoon34',
        image: 'cartoons/VFD_0034.jpg',
        alt:'',
        number:'0034'
      },
      { title: 'cartoon33',
        image: 'cartoons/VFD_0033.jpg',
        alt:'',
        number:'0033'
      },
      { title: 'cartoon32',
        image: 'cartoons/VFD_0032.jpg',
        alt:'',
        number:'0032'
      },
      { title: 'cartoon31',
        image: 'cartoons/VFD_0031.jpg',
        alt:'',
        number:'0031'
      },
      { title: 'cartoon30',
        image: 'cartoons/VFD_0030.jpg',
        alt:'',
        number:'0030'
      },
      { title: 'cartoon29',
        image: 'cartoons/VFD_0029.jpg',
        alt:'',
        number:'0029'
      },
      { title: 'cartoon28',
        image: 'cartoons/VFD_0028.jpg',
        alt:'',
        number:'0028'
      },
      { title: 'cartoon27',
        image: 'cartoons/VFD_0027.jpg',
        alt:'',
        number:'0027'
      },
      { title: 'cartoon26',
        image: 'cartoons/VFD_0026.jpg',
        alt:'',
        number:'0026'
      },
      { title: 'cartoon25',
        image: 'cartoons/VFD_0025.jpg',
        alt:'',
        number:'0025'
      },
      { title: 'cartoon24',
        image: 'cartoons/VFD_0024.jpg',
        alt:'',
        number:'0024'
      },
      { title: 'cartoon23',
        image: 'cartoons/VFD_0023.jpg',
        alt:'',
        number:'0023'
      },
      { title: 'cartoon22',
        image: 'cartoons/VFD_0022.jpg',
        alt:'',
        number:'0022'
      },
      { title: 'cartoon21',
        image: 'cartoons/VFD_0021.jpg',
        alt:'',
        number:'0021'
      },
      { title: 'cartoon20',
        image: 'cartoons/VFD_0020.jpg',
        alt:'',
        number:'0020'
      },
      { title: 'cartoon19',
        image: 'cartoons/VFD_0019.jpg',
        alt:'',
        number:'0019'
      },
      { title: 'cartoon18',
        image: 'cartoons/VFD_0018.jpg',
        alt:'',
        number:'0018'
      },
      { title: 'cartoon17',
        image: 'cartoons/VFD_0017.jpg',
        alt:'',
        number:'0017'
      },
      { title: 'cartoon16',
        image: 'cartoons/VFD_0016.jpg',
        alt:'',
        number:'00016'
      },
      { title: 'cartoon15',
        image: 'cartoons/VFD_0015.jpg',
        alt:'',
        number:'0015'
      },
      { title: 'cartoon14',
        image: 'cartoons/VFD_0014.jpg',
        alt:'',
        number:'0014'
      },
      { title: 'cartoon13',
        image: 'cartoons/VFD_0013.jpg',
        alt:'',
        number:'0013'
      },
      { title: 'cartoon12',
        image: 'cartoons/VFD_0012.jpg',
        alt:'',
        number:'0012'
      },
      { title: 'cartoon11',
        image: 'cartoons/VFD_0011.jpg',
        alt:'',
        number:'0011'
      },
      { title: 'cartoon10',
        image: 'cartoons/VFD_0010.jpg',
        alt:'',
        number:'0010'
      },
      { title: 'cartoon9',
        image: 'cartoons/VFD_0009.jpg',
        alt:'',
        number:'0009'
      },
      { title: 'cartoon8',
        image: 'cartoons/VFD_0008.jpg',
        alt:'',
        number:'0008'
      },
      { title: 'cartoon7',
        image: 'cartoons/VFD_0007.jpg',
        alt:'',
        number:'0007'
      },
      { title: 'cartoon6',
        image: 'cartoons/VFD_0006.jpg',
        alt:'',
        number:'0006'
      },
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
