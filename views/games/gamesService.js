(function () {
    angular.module('myApp').factory('gamesService', ['$http', function ($http) {


        var url = "json/games.json";

        return function (sucessCallBack, errorCallBack) {
            $http({method: 'GET', url: url}).then(_sucessCallBack, _errorCallBack);
            function _sucessCallBack(result) {
                sucessCallBack(result.data);
            }

            function _errorCallBack(result) {
                errorCallBack(result);
            }
        }

    }]);
})();