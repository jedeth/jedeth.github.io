(function () {
'use strict';
var x="hello";
angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
    $scope.name = "Jerome"
    $scope.sayHello = function(){
        return "Hello coursera";
    };
});

})();
