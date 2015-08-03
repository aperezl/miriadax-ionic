// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('tabs', {
    url: "/tab",
    abstract: true,
    templateUrl: "tabs.html"
  })
  .state('tabs.home', {
    url: '/home',
    views: {
        'home-tab': {
          templateUrl: "home.html",
          controller: 'mainCtrl'
        }
      }
  })
  .state('tabs.quizes', {
    url: '/quizes',
    views: {
      'quizes-tab': {
        templateUrl: 'quizes.html',
        controller: 'mainCtrl'
      }
    }
  })
  .state('tabs.quizesView', {
    url: '/quizes/:id',
    views: {
      'quizes-tab': {
        templateUrl: 'quizes_view.html',
        controller: 'mainCtrl'
      }
    }
  })
  $urlRouterProvider.otherwise("/tab/home");
})




.controller('mainCtrl', function($scope, $http) {
  $scope.getQuizes = function() {
    $http.get('http://localhost:5000/quizes')
    .then(function(response) {
      console.log(response);
      $scope.quizes = response.data.quizes;
    });
  };

  $scope.delete = function() {
    console.log('Delete quiz');
  };

  $scope.edit = function(item) {
    console.log('View quiz', item)
  }

  $scope.view = function(item) {
    console.log('view', item);
  }
});
