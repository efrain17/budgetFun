(function () {

  angular.module('experience.directives', [])
    .directive('experienceName', function () {
      return {
        restrict: 'E',
        templateUrl: 'partials/experience-name.html'
      };
    })

    .directive('experienceImage', function () {
      return {
        restrict: 'E',
        templateUrl: 'partials/experience-image.html'
      };
    })

    .directive('experienceType', function () {
      return {
        restrict: 'E',
        templateUrl: 'partials/experience-type.html'
      };
    })

    .directive('experienceCard', function () {
      return {
        retrict: 'E',
        templateUrl: 'partials/experience-card.html'
      }
    })
})();
