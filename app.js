(function () {
    'use strict';

    angular.module('LunchCheck', [])

    .controller('LunchCheckController', function ($scope){
        console.log('ici !!!')
            $scope.repas = "tototot,,r";
            // var Plats = $scope.repas; 
            $scope.alerte = calculNbPlats($scope.repas);

            $scope.displayAlerte = function() {
                var xxx = calculNbPlats ($scope.repas);
                $scope.alerte = xxx;
            };
            
            function calculNbPlats (string) {
                console.log('calculNbPlats')
                var tableauDesPlats = [];

                tableauDesPlats = string.split(",");
                var longeurTableau = 0;
                longeurTableau = tableauDesPlats.length;

                if (longeurTableau < 4 )
                {
                    return "enjoy !"
                } else {
                    return "trop !"
                }
            };

                
});

})();
