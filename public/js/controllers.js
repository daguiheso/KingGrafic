(function(_) {
	// 2 param es el arreglo de las dependencias 
	angular.module('kinggrafic.controllers', []) //sin  ;  al final para tener chainmethods
		.controller('PenPsController', ['$scope', 'kinggraficService', function ($scope, kinggraficService){

			kinggraficService.all().then(function (data){
				$scope.penPs = data;
				$scope.groupped = partition(data, 4);
			});


			function partition(data, n) {
	        	return _.chain(data).groupBy(function (element, index) {
	            	return Math.floor(index / n);
	            }).toArray().value();
	      	}	      	
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
})(_);