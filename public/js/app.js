(function () {

  var app = angular.module('experience', [
    'ngRoute',
    'ui.bootstrap',
    'experience.controllers',
    'experience.directives',
    'experience.filters',
    'experience.services',
    'ngMap'
  ]);

  app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/experiencias.html',
        controller: 'ExperiencesController'
      })
      .when('/map', {
        templateUrl: 'views/map.html',
        controller: 'MapController'
      })
      .when('/preferents', {
        templateUrl: 'views/preferents.html',
        controller: 'PreferentsController'
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
