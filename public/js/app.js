(function () {
  var app = angular.module('penPublicity', []);

  app.controller('PenPController', function () {
    this.esfero = {
      id: "001",
      name: "Esfero Linterna 2",
      nameimg: "esferosp/el2-1",
      category: "Esferos Publicitarios",
      colors: ["Rojo", "Azul", "Verde"],
      caracteristic: [],
      description: "Un esfero de punta suave que a su vez brinda la oportunidad de ver lo que se escribe en la oscuridad."
    };
  });
})();
