(function(){
	angular.module('kinggrafic.services',[])
		.factory('kinggraficService', ['$http', '$q', '$filter', function($http, $q, $filter){
			//logica del negocio del product
			var normalize = $filter('normalize');

			function all(){
				var deferred = $q.defer(); //metodo defer me permite interactuar con la promise
				$http.get('/penP.json') //esto me devuelve los datos en una promesa, la promesa recibe una function que se llama callback
					.success(function(data){ //esta variable data contiene los datos del array del esfero obtenido del servidor
						deferred.resolve(data)
					});

				return deferred.promise;
			}

			function byName(name) {
				name = normalize(name);
				var deferred = $q.defer();
				
				all().then(function (data){
					var results = data.filter(function (esfero){ // .filter => funcionalidad de JS
						return normalize(esfero.name) === name;
					});

					if (results.length > 0) {
						deferred.resolve(results[0]);
					}else{
						deferred.reject();
					}
				});
				return deferred.promise;
			}
			//obetos que retorna el servicio tipo factory
			return {
				all : all,
				byName : byName
			}
		}]);
})();