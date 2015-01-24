(function () {

  var app = angular.module('penPublicity', [
  	'ngRoute', 
    'kinggrafic.controllers',
    'kinggrafic.directives',
    'kinggrafic.filters'
  ]);

  //el modulo routeProvider esta siendo injectado a la funcion routeProvider
  app.config(['$routeProvider', function($routeProvider){
  	$routeProvider   //lamado de metodos encadenados
  		.when('/',{  //el  /  => ruta principal
  			templateUrl: 'views/kinggrafic.html',
        controller: 'kinggraficController'
  		})
  		.when('/esfero/:id', {  // when me hace match de la ruta  //variable id 
  			templateUrl: 'views/esfero.html', //objeto de configuracion de la ruta 
  			controller: 'PenPController', //injectando el controlador a esta ruta 
  			controllerAs: 'penPCtrl'
  		})
  		.otherwise({
  			redirectTo: '/'
  		});
  }]);



})();

