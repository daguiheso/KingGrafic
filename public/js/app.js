(function () {

  var app = angular.module('penPublicity', [
    'kinggrafic.services',
  	'ngRoute', 
    'kinggrafic.controllers',
    'kinggrafic.directives',
    'kinggrafic.filters'
  ]);

  //el modulo routeProvider esta siendo injectado a la funcion routeProvider
  app.config(['$routeProvider', function($routeProvider){
  	$routeProvider   //lamado de metodos encadenados
  		.when('/',{  //el  /  => ruta principal
  			templateUrl: 'views/esferosPublicitarios.html',
        controller: 'PenPsController'
  		})
  		.when('/esfero/:id', {  // when me hace match de la ruta  //variable id 
  			templateUrl: 'views/esfero.html', //objeto de configuracion de la ruta 
  			controller: 'PenPController', //injectando el controlador a esta ruta 
  		})
  		.otherwise({
  			redirectTo: '/'
  		});
  }]);



})();

