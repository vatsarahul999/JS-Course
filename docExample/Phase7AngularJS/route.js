var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
    .when("/home", {
        template: ["<h1>Home</h1>"]
       })
    .when ("/about", {
        template: ["<h1>About page</h1>"]
    })
    // .otherwise({
    //     template: ["<h1>404 Not Found</h1>"]
    // });
});