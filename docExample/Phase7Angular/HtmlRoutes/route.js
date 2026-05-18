var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
    .when("/home", {
        template: ["<h1>Home</h1><br><p>Welcome to the Home page!</p>"]
       })
    .when ("/about", {
        template: ["<h1>About page</h1><br><p>Welcome to the About page!</p>"]
    })
    // .otherwise({
    //     template: ["<h1>404 Not Found</h1>"]
    // });
});