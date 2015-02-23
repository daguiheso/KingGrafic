(function(_) {
	// 2 param es el arreglo de las dependencias 
	angular.module('kingGrafic.controllers', []) //sin  ;  al final para tener chainmethods

		.controller('ProductsController', ['$scope', 'kinggraficService', function ($scope, kinggraficService){

			kinggraficService.all().then(function (data){
				$scope.products = data;
				$scope.groupped = partition(data, 4);
			});


			function partition(data, n) {
	        	return _.chain(data).groupBy(function (element, index) {
	            	return Math.floor(index / n);
	            }).toArray().value();
	      	}	      	
		}])
		

		.controller('ProductController', ['$scope', '$routeParams', 'kinggraficService', function ($scope, $routeParams, kinggraficService) {
			var name = $routeParams.name;

			kinggraficService.byName(name)
				.then(function (data){
					$scope.product = data;
				})
		}])


		.controller('TabsController', ['$scope', function ($scope) {
			$scope.tab = 1;

			$scope.selectTab = function (tab) {
				$scope.tab = tab;
			};

			$scope.isActive = function (tab) {
				return tab === $scope.tab;
			}
		}]); 

})(_);