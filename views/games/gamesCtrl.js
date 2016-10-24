(function () {
    angular.module('myApp').controller('gamesCtrl', ['$scope', 'gamesService', function ($scope, gamesService) {

        /*$scope.games = [];*/

        gamesService(onDemoServiceSucess, onDemoServiceError);

        function onDemoServiceSucess(result) {
            $scope.games = result;
        }

        function onDemoServiceError(result) {
            console.log(result);
        }



    }]);
})();

