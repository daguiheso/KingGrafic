(function(){
	angular.module('kingGrafic.filters', [])
		.filter('normalize', function () {
		    return function (input) {
		    	if (!input) return "";
		    	input = input
	    	        .replace('♀', 'f')
	    	        .replace('♂', 'm');
	    	        // .replace(/\W+/g, "");
		        return input.toLowerCase();
		    };
  		})

		.filter('imageify', ['$filter', function ($filter) {
		    return function (input, ext) {
		      var url = "img/pens/" + $filter('normalize')(input) + "." + ext || "jpg";
		      return url;
		    };
  		}]);
})();