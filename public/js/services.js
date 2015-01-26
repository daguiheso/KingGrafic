(function(){
	angular.module('kinggrafic.services',[])
		.factory('kinggraficService', ['$http', '$q',function($http, $q){

			function all(){
				var deferred = $q.defer(); //metodo defer me permite interactuar con la promise
				$http.get('/penP.json') //esto me devuelve los datos en una promesa, la promesa recibe una function que se llama callback
					.success(function(data){ //esta variable data contiene los datos del array del esfero obtenido del servidor
						deferred.resolve(data)
					});

				return deferred.promise;
			}

			return {
				all : all
			}
		}]);//logica del negocio del product
})();