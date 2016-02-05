angular.module('SkorzewskiWebsite')
    .config(function($routeProvider){
        $routeProvider
            .when('/about', {
                templateUrl: '/templates/pages/about/index.html'
            })
            .when('/publications', {
                templateUrl: '/templates/pages/publications/index.html'
            })
            .when('/teaching', {
                templateUrl: '/templates/pages/teaching/index.html'
            })
            .when('/', {
                redirectTo: '/about'
            })
            .otherwise({
                redirectTo: '/'
            });
});
