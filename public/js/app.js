(function () {
  var app = angular.module('penPublicity', [
    'kinggrafic.controllers'
  ]);

  

  app.directive('categoriaesferoData', function(){
    return{
      restrict: 'E',
      templateUrl: 'partials/categoriaesfero-data.html'
    }
  });

  app.directive('descriptionData', function(){
    return{
      restrict: 'E',
      templateUrl: 'partials/description-data.html'
    }
  });

  app.directive('fichatecnicaData', function(){
    return{
      restrict: 'E',
      templateUrl: 'partials/fichatecnica-data.html'
    }
  });

  app.directive('imagenesData', function(){
    return{
      restrict: 'E',
      templateUrl: 'partials/imagenes-data.html'
    }
  });

  app.directive('imagenData', function(){
    return{
      restrict: 'E',
      templateUrl: 'partials/imagen-data.html'
    }
  });

  app.directive('commentsData', function(){
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


  app.filter('imageify', function () {
    return function (input, ext) {
      var url = "img/esferosp/" + input.toLowerCase() + "." + ext || "jpg";
      return url;
    };
  });

})();

