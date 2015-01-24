(function() {
	// 2 param es el arreglo de las dependencias 
	angular.module('kinggrafic.controllers', []) //sin  ;  al final para tener chainmethods
		.controller('PenPsController', ['$scope', '$http', function($scope,$http){
			$scope.penPs = [];
			$http.get('/penP.json')
				.success(function(data){ //esta variable data contiene los datos del array del esfero obtenido del servidor
					$scope.penPs = data;
				});
		}])
		.controller('PenPController', function () {
		  this.esfero = {
		    id: "001",
		    name: "Esfero Linterna 2",
		    nameimg: "el2-1",
		    category: "Esferos Publicitarios",
		    colors: ["Rojo", "Azul", "Verde"],
		    caracteristic: [],
		    description: ["Un esfero de punta suave que a su vez brinda la oportunidad de ver lo que se escribe en la oscuridad.", "Cuenta con linterna integrada."],      
		    height: "15cm",		    
		    material: "plastico",
		    typePrint: "Impresion en Tinta Plastica",
		    areaPrint: "60 mm x 7.5 mm",
		    flete: "Incluido por compras mayores a 250000",
		    images: [ "el2-2", "el2-3", "el2-4" ]
		  };
		})

		.controller('TabsController', function(){
		  this.tab = 1;

		  this.selectTab = function(tab){
		    this.tab = tab;
		  };
		}); 
})();