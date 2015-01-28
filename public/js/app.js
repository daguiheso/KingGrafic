(function () {

  var app = angular.module('kingGrafic', [
  	'ngRoute', 
    'kingGrafic.services',
    'kingGrafic.controllers',
    'kingGrafic.directives',
    'kingGrafic.filters'
  ]);

  //el modulo routeProvider esta siendo injectado a la funcion routeProvider
  app.config(['$routeProvider', function($routeProvider){
  	$routeProvider   //lamado de metodos encadenados
  		.when('/',{  //el  /  => ruta principal
  			templateUrl: 'views/esferosPublicitarios.html',
        controller: 'ProductsController'
  		})
  		.when('/esfero/:name', {  // when me hace match de la ruta  //variable id 
  			templateUrl: 'views/esfero.html', //objeto de configuracion de la ruta 
  			controller: 'ProductController', //injectando el controlador a esta ruta 
  		})
  		.otherwise({
  			redirectTo: '/'
  		});
  }]);



})();

