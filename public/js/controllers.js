(function() {
	// 2 param es el arreglo de las dependencias 
	angular.module('kinggrafic.controllers', []) //sin  ;  al final para tener chainmethods
		.controller('PenPsController', ['$scope', 'kinggraficService', function ($scope, kinggraficService){

			kinggraficService.all().then(function (data){
				$scope.penPs = data;
			});
		}])

		.controller('PenPController', ['$scope', '$routeParams', 'kinggraficService', function ($scope, $routeParams, kinggraficService) {
			var name = $routeParams.name;
			$scope.esfero = {};

			kinggraficService.byName(name)
				.then(function (data){
					$scope.esfero = data;
				})
		}])

		.controller('TabsController', function (){
		  this.tab = 1;

		  this.selectTab = function (tab){
		    this.tab = tab;
		  };
		}); 
})();