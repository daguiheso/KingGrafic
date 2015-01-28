(function(){
	angular.module('kingGrafic.directives', [])
		.directive('categoriaesferoData', function(){
		  return{
		    restrict: 'E',
		    templateUrl: 'partials/categoriaesfero-data.html'
		  }
		})

		.directive('descriptionData', function(){
		  return{
		    restrict: 'E',
		    templateUrl: 'partials/description-data.html'
		  }
		})

		.directive('fichatecnicaData', function(){
		  return{
		    restrict: 'E',
		    templateUrl: 'partials/fichatecnica-data.html'
		  }
		})

		.directive('imagenesData', function(){
		  return{
		    restrict: 'E',
		    templateUrl: 'partials/imagenes-data.html'
		  }
		})

		.directive('imagenData', function(){
		  return{
		    restrict: 'E',
		    templateUrl: 'partials/imagen-data.html'
		  }
		})

		.directive('commentsData', ['kinggraficService', function (kinggraficService){
		  return{
		    restrict: 'E',
		    templateUrl: 'partials/comments-data.html',

		    scope: {
		    	name: '@name' // @ => obteniendo texto 
		    },
		    link: function (scope, element, attributes) {  // function o propiedad  link me permite enlazar las propiedades del scope con la directiva 
		    	attributes.$observe('name', function (value) {
		    		if (value) {
		    			scope.name = value;
		    			scope.comments = kinggraficService.getComments(value);
		    		}
		    	});
		    },		    
		    controller: function ($scope) {
		      $scope.comments = kinggraficService.getComments($scope.name);
		      $scope.comment = {};
		      $scope.show = false;

		      $scope.toggle = function () {
		        $scope.show = !$scope.show;
		      };

		      $scope.anonymousChanged = function(){
		        if ($scope.comment.anonymous) {
		          $scope.comment.email = "";
		        }
		      };

		      //tampoco recibe params de entrada porque vamos a trabajar sobre el controller
		      $scope.addComment = function(){
		        $scope.comment.date = Date.now();
		        kinggraficService.saveComment($scope.name, $scope.comment);
		        $scope.comments = kinggraficService.getComments($scope.name);
		        $scope.comment = {}; //limpiar o resetear el comentario despues de agregado
		      };
		    },
		    controllerAs: 'cmtsCtrl'
		  };
		}]);

})();