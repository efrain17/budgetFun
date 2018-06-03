(function () {

  var app = angular.module('experience', [
    'ngRoute',
    'ui.bootstrap',
    'experience.controllers',
    'experience.directives',
    'experience.filters',
    'experience.services'
  ]);

  app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/experiencias.html',
        controller: 'ExperiencesController'
      })
      .when('/:type', {
        templateUrl: 'views/experiencias.html',
        controller: 'ExperiencesController'
      })
      .when('/experience/:name', {
        templateUrl: 'views/experiencia.html',
        controller: 'ExperienceController'
      })
      .otherwise({
        redirectTo: '/'
      });

  }]);

})();
