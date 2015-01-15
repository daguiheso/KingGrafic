(function () {
  var app = angular.module('penPublicity', [
    'kinggrafic.controllers',
    'kinggrafic.directives'
  ]);  

  app.filter('imageify', function () {
    return function (input, ext) {
      var url = "img/esferosp/" + input.toLowerCase() + "." + ext || "jpg";
      return url;
    };
  });

})();

