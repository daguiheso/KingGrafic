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
  		.when('/', {  // when me hace match de la ruta  //el  /  => ruta principal
  			templateUrl: 'views/esfero.html', //objeto de configuracion de la ruta 
  			controller: 'PenPController', //injectando el controlador a esta ruta 
  			controllerAs: 'penPCtrl'
  		})
  }]);



})();

