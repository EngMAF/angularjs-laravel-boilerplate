var app =  angular.module('App',['ngRoute']);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/', {templateUrl: 'public/views/homepage.html',controller: 'HomeController'}) 
            .otherwise({ redirectTo: '/'});
    }]);