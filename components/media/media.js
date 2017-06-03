var app = angular.module("glenmoraApp");

app.directive("media", [ function () {    
    return {
        templateUrl: "media/media.html",
        restrict: "E"
    };
}])