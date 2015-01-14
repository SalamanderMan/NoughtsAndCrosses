(function () {
    angular.module('noughtsAndCrossesApp')
    .controller('noughtsAndCrossesController', function ($scope, $http, gameModel) {

        $scope.gameModel = gameModel;

        $scope.newGame = function () {
            gameModel.newGame();
        };

        $scope.makeMove = function (squareNumber) {
            gameModel.makeMove(squareNumber);
            gameModel.currentPlayer();
        };

        //TODO: Reinstate :later
        $scope.togglePlayerChoice1 = function () {
            gameModel.togglePlayerChoice1();
        };

        $scope.togglePlayerChoice2 = function () {
            gameModel.togglePlayerChoice2();
        };
    });
}());

