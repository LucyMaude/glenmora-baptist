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
        .when("/values", {
        controller: "valuesCtrl",
        templateUrl: "about/values/values.html"
    })
        .when("/vision", {
        controller: "visionCtrl",
        templateUrl: "about/vision/vision.html"
    })
        .when("/beliefs", {
        controller: "beliefsCtrl",
        templateUrl: "about/beliefs/beliefs.html"
    })
        .when("/leadership", {
        controller: "leadershipCtrl",
        templateUrl: "about/leadership/leadership.html"
    })
        .when("/partners", {
        controller: "partnersCtrl",
        templateUrl: "about/partners/partners.html"
    })
        .when("/missions", {
        controller: "missionsCtrl",
        templateUrl: "connect/mission/mission.html"
    })
        .when("/kids", {
        controller: "kidsCtrl",
        templateUrl: "connect/kids/kids.html"
    })
        .when("/youth", {
        controller: "youthCtrl",
        templateUrl: "connect/youth/youth.html"
    })
        .when("/women", {
        controller: "womenCtrl",
        templateUrl: "connect/women/women.html"
    })
        .when("/sermons", {
        controller: "sermonsCtrl",
        templateUrl: "/resources/sermons/sermons.html"
    })
    .otherwise({
        redirectTo: "/home",
    });
}])