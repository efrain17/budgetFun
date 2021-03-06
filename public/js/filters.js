(function () {

  angular.module('experience.filters', [])
    .filter('normalize', function () {
      return function (input) {
          if (!input) return "";

          input = input
                  .replace('♀', 'f')
                  .replace('♂', 'm')
                  .replace(/\W+/g, "");
          return input.toLowerCase();
      };
    })

    .filter('imageify', ['$filter', function ($filter) {
      return function (input) {
        var url = "img/experiences/" + $filter('normalize')(input) + ".jpg";
        return url;
      };
    }])

  .filter('startFromGrid', function() {
        return function(input, start) {
        start = +start;
        return input ? input.slice(start) : [];}
  });

})();
