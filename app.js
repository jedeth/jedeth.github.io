(function () {
    'use strict';

    angular.module('LunchCheck', [])

    .controller('LunchCheckController', function($scope){
            $scope.repas = "";
            $scope.nombreDePlats = calculatriceNombreDePlats($scope.repas);

        // function calculatriceNombreDeRepas(string){
        //     var totalNombreDeRepas = split();
            
        // }
            console.log (scope.repas);

})();
