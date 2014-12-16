(function () {
    angular.module('noughtsAndCrossesApp')
    .controller('noughtsAndCrossesController', function ($scope, $http, gameModel) {

        $scope.gameModel = gameModel;

        $scope.newGame = function () {
            console.log('todo new game');
        };

        $scope.makeMove = function (squareNumber) {
            console.log('make movegame');
        };

    });
}());

