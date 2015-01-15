(function(){
	angular.module('kinggrafic.filters', [])
		.filter('imageify', function () {
	    return function (input, ext) {
	      var url = "img/esferosp/" + input.toLowerCase() + "." + ext || "jpg";
	      return url;
	    };
  		});
})();