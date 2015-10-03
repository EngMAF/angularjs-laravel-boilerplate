var app =  angular.module('App',['ngRoute']);

app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/',      {templateUrl: 'assets/views/homepage.html'    ,controller: 'HomeController'}) 
            .when('/items', {templateUrl: 'assets/views/items/index.html' ,controller: 'ItemController'}) 
            .otherwise({ redirectTo: '/'});
    }]);

app.directive('item', function() {
  return {
      restrict: 'AE',
      replace: 'true',
      templateUrl: 'assets/views/items/item.html'
  };
});