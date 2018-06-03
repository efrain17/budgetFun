(function (_) {

  angular.module('experience.controllers', [])
    .controller('ExperiencesController', ['$rootScope','$scope', '$routeParams', 'experienceService', function ($rootScope,$scope, $routeParams, experienceService) {
      var type = $routeParams.type;
      $rootScope.title="Experience";
      var experiencesOld=[];
      $scope.currentPage = 1;
      $scope.maxSize = 7;
      $scope.itemsPerPage=12;
      if (type) {
        $scope.type = type;
        experienceService.byType(type).then(function (data) {
          $scope.experiences = data
          $scope.groupped = partition(data, 4);
          experiencesOld=$scope.experiences;
          $scope.totalItems =$scope.experiences.length;
        });
      } else {
        experienceService.all().then(function (data) {
          $scope.experiences = data;
          $scope.groupped = partition(data, 4);
          experiencesOld=$scope.experiences;
          $scope.totalItems =$scope.experiences.length;
        });
      }

      function partition(data, n) {
        return _.chain(data).groupBy(function (element, index) {
          return Math.floor(index / n);
        }).toArray().value();
      }

      $scope.searchExperience= function(){
        var searchData=experiencesOld.filter(function(data){
        return data.name.toLowerCase().indexOf($scope.textSearch.toLowerCase())!== -1;});
        $scope.experiences = searchData;
        $scope.totalItems =parseInt($scope.experiences.length/4);
        $scope.groupped = partition(searchData, 4);
      }

      $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
      };

      $scope.pageChanged = function() {
        console.log('Page changed to: ' + $scope.currentPage);
      };       

    }])

    .controller('ExperienceController', ['$rootScope','$scope', '$routeParams', 'experienceService', function ($rootScope,$scope, $routeParams, experienceService) {
      var name = $routeParams.name;

      experienceService.byName(name)
      .then(function (data) {
        $scope.experience = data;
        $rootScope.title='Experience | '+name;
      });
    }])

    .controller('TabsController',['$scope',function ($scope) {
       $scope.tab = 1;

      $scope.selectTab =function (tab) {
        $scope.tab = tab;
      };

      $scope.isActive =function(tab){
        return $scope.tab===tab; 
      };

    }])

    .controller('RatingCtrl', function ($scope) {
        $scope.rate =randomNUm();
        $scope.max = 7;
        $scope.isReadonly = false;

      $scope.hoveringOver = function(value) {
        $scope.overStar = value;
        $scope.percent = parseInt(100 * (value / $scope.max));
        };

      function randomNUm() {
         return Math.round(Math.random()*(7-1)+parseInt(1));
         }
    })

    .controller('PaginationDemoCtrl', function ($scope, $log) {
        
        $scope.bigTotalItems = 175;
        $scope.bigCurrentPage = 1;
      })

  .filter('startFromGrid', function() {
        return function(input, start) {
        start = +start;
        return input.slice(start);}
  });

})(_);
