(function(){
	angular.module('kinggrafic.directives', [])
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

		.directive('commentsData', function(){
		  return{
		    restrict: 'E',
		    templateUrl: 'partials/comments-data.html',
		    controller: function(){
		      this.comments = [];
		      this.comment = {};
		      this.show = false;

		      this.toggle = function () {
		        this.show = !this.show;
		      };

		      this.anonymousChanged = function(){
		        if (this.comment.anonymous) {
		          this.comment.email = "";
		        }
		      };

		      //tampoco recibe params de entrada porque vamos a trabajar sobre el controller
		      this.addComment = function(){
		        this.comment.date = Date.now();
		        this.comments.push(this.comment); //.push() ingresa un elemento en la ultima posicion del array
		        this.comment = {}; //limpiar o resetear el comentario despues de agregado
		      };
		    },
		    controllerAs: 'cmtsCtrl'
		  };
		});

})();