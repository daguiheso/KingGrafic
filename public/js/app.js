(function () {
  var app = angular.module('penPublicity', []);

  app.controller('PenPController', function () {
    this.esfero = {
      id: "001",
      name: "Esfero Linterna 2",
      nameimg: "el2-1",
      category: "Esferos Publicitarios",
      colors: ["Rojo", "Azul", "Verde"],
      caracteristic: [],
      description: ["Un esfero de punta suave que a su vez brinda la oportunidad de ver lo que se escribe en la oscuridad.", "Cuenta con linterna integrada."],      
      height: "15cm",
      width: "1cm",
      material: "plastico",
      typePrint: "Impresion en Tinta Plastica",
      areaPrint: "60 mm x 7.5 mm",
      flete: "Incluido por compras mayores a 250000",
      images: [ "el2-2", "el2-3", "el2-4" ]
    };
  });

  app.controller('TabsController', function(){
    this.tab = 1;

    this.selectTab = function(tab){
      this.tab = tab;
    };
  }); 

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

