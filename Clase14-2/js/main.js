(function(){
  'use strict';

  angular.module("myApp",[]).controller("movieCtrl", movieCtrl);

  function movieCtrl(){
    var movie = this;

    //movie.nombre=[{'nombre':'Luis','edad':20},{'nombre':'Donaldo','edad':23},{'nombre':'Jorge','edad':21},{'nombre':'Mauricio','edad':20},{'nombre':'Kevin','edad':20}];

    movie.collection = [
      {'img':'https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3MDM4NTg0NV5BMl5BanBnXkFtZTcwNjI4MTczMw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
      'name': 'Una serie de eventos desafortunados',
      'cast': ['Jim Carrey', 'Lemon Snickets'],
      'year': 2011,
      'category': 'fantasia'
      },
      {'img':'https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0Mzc2OTQ0Ml5BMl5BanBnXkFtZTgwOTQ5MjE4MDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
      'name': 'Resident Evil the final chapter',
      'cast': ['Milla Jovovich', 'Iain Glen', 'Ali Larter'],
      'year': 2017,
      'category': 'zombies'
      },
      {'img':'https://images-na.ssl-images-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_SY1000_SX675_AL_.jpg',
      'name': 'La la land',
      'cast': ['Emma Stone', 'reparto1', 'el zombi colado'],
      'year': 2016,
      'category': 'musical'
      },
      {'img':'https://images-na.ssl-images-amazon.com/images/M/MV5BMjQwNjk5MTk4Ml5BMl5BanBnXkFtZTcwNTgwNDA5OQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
      'name': 'Metallica Througth the never',
      'cast': ['James Hetfield', 'Kirk Hammet', 'Lars Urlich'],
      'year': 2013,
      'category': 'Rockera'
      },
      {'img':'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY0NDY3MDMxN15BMl5BanBnXkFtZTcwOTM5NzMzOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
      'name': 'Los ilusionistas',
      'cast': ['Jesse Eisenberg', 'Mark Ruffalo', 'Woody Harrelson'],
      'year': 2013,
      'category': 'Magia'
      },
      {'img':'https://images-na.ssl-images-amazon.com/images/M/MV5BNzQ0NDgwODQ3NV5BMl5BanBnXkFtZTgwOTYxNjc2ODE@._V1_UX182_CR0,0,182,268_AL_.jpg',
      'name': 'Los ilusionistas 2',
      'cast': ['Jesse Eisenberg', 'Mark Ruffalo', 'Woody Harrelson'],
      'year': 2016,
      'category': 'Magia'
      }

    ];
  }
})();
