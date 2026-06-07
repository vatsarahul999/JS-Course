let app = angular.module("myApp", []);
app.controller("MainCtrl", function ($scope:any) {
    $scope.myTag = "";
    $scope.myNewVariable = "This is a new variable";
    $scope.sayHello = function () {
        alert("Hello world!");
    };
});