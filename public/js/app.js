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

  app.controller('CommentsController', function(){
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

  });

  app.filter('imageify', function () {
    return function (input, ext) {
      var url = "img/esferosp/" + input.toLowerCase() + "." + ext || "jpg";
      return url;
    };
  });

})();

