var app = angular.module('martabak', ['ngRoute', 'angular-loading-bar', 'ngAnimate']);

app.run(function($rootScope, $location, $timeout) {
    var activeMenu = 0;
    $rootScope.logo = 1;
    $rootScope.set = function(x) {
        $rootScope.activeMenu = x;
        if(x === 0) {
            $rootScope.logo = 2;
        } else {
            $rootScope.logo = 1;
        }
    };
    switch ($location.path()) {
        case '/':
            activeMenu = 0;
            break;
        case '/can-do':
            activeMenu = 1;
            break;
        case '/works':
            activeMenu = 2;
            break;
        case '/tools':
            activeMenu = 3;
            break;
        case '/contact':
            activeMenu = 4;
            break;
    }
    $rootScope.activeMenu = activeMenu;
});

app.config(function($routeProvider) {
    $routeProvider.
    when('/', {templateUrl: 'template/index.html'}).
    when('/can-do', {templateUrl: 'template/do.html'}).
    when('/works', {templateUrl: 'template/works.html'}).
    when('/tools', {templateUrl: 'template/tools.html'}).
    when('/contact', {templateUrl: 'template/contact.html'}).
    otherwise({redirectTo: '/'});
});

app.controller('masterHead', function($rootScope, $timeout, $location) {
    if($location.path() == '/') {
        $timeout(function() {$rootScope.logo = 2;}, 1000);
    } else {
        $timeout(function() {$rootScope.logo = 2;}, 1000);
        $timeout(function() {$rootScope.logo = 1;}, 2000);
    }

});
