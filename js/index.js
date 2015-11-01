var app = angular.module('martabak',['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'template/index.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});
