var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            template: [
                '<div ng-controller="MainCtrl">',
                '    <input ng-model="myTag">',
                '    <p>{{ myTag }}</p>',
                '    <p>The result of addition is: {{ result }}</p>',
                '    <button ng-click="sayHello()">Say Hello</button>',
                '    <ul>',
                '        <li ng-repeat="name in names">{{ name }}</li>',
                '    </ul>',
                '</div>'
            ].join(""),
            controller: "MainCtrl"
        })
        .when("/about", {
            template: [
                '<div ng-controller="MainCtrl2">',
                '    <h3>About Route</h3>',
                '    <input ng-model="myTag2">',
                '    <p>{{ myTag2 }}</p>',
                '    <p ng-if="isVisible">The value of isVisible is true</p>',
                '</div>'
            ].join(""),
            controller: "MainCtrl2"
        })
        .otherwise({
            redirectTo: "/home"
        });
});

app.controller("MainCtrl", function ($scope, inputFormValidationService, additionService, $http) {
    $scope.myTag = "";
    $scope.isVisible = false;
    $scope.sayHello = function () {
        alert("Hello world!");
    };
    $http.get("https://jsonplaceholder.typicode.com/users").then(function (response) {
        $scope.names = response.data.map(function (user) {
            console.log(user);
            return user.name;
        });
    });
    $scope.result = additionService.add(5, 10);
});
app.service("inputFormValidationService", function () {
    alert("Hello world!");
});
app.controller("MainCtrl2", function ($scope) {
    $scope.myTag2 = "";
    $scope.isVisible = true;
});
app.service("additionService", function () {
    this.add = function (a, b) {
        return a + b;
    };
});
app.factory("mathFactory", function () {
    return {
        add: function (a, b) {
            return a + b;
        },
        subtract: function (a, b) {
            return a - b;
        }
    };
});