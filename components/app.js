var app = angular.module("glenmoraApp", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider){
    $routeProvider
        .when("/home", {
        controller: "homeCtrl",
        templateUrl: "home/home.html"
    })
    .when("/about", {
        controller: "aboutCtrl",
        templateUrl: "about/about.html"
    })
    .when("/resources", {
        controller: "resourcesCtrl",
        templateUrl: "resources/resources.html"
    })
    .when("/connect", {
        controller: "connectCtrl",
        templateUrl: "connect/connect.html"
    })
    .otherwise({
        redirectTo: "/home",
    });
}])