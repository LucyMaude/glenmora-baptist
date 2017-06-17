var app = angular.module("glenmoraApp");

app.directive("topNav", [function () {
    return {
        templateUrl: "nav/nav.html"
    };
}]);