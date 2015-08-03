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

.config(function($stateProvider) {
  $stateProvider
  .state('index', {
    url: '/',
    templateUrl: 'home.html'
  })
  .state('quizes', {
    url: '/quizes',
    templateUrl: 'quizes.html'
  })
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

  $scope.edit = function() {
    console.log('View quiz')
  }
});
