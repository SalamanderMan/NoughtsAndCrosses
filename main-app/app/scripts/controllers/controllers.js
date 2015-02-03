(function () {
    angular.module('noughtsAndCrossesApp')
    .controller('noughtsAndCrossesController', function ($scope, $http, gameModel, audioSprite) {

        $scope.gameModel = gameModel;

        $scope.newGame = function () {
            gameModel.newGame();
            audioSprite.newGame();
        };

        $scope.makeMove = function (squareNumber) {
            gameModel.makeMove(squareNumber);
            audioSprite.makeMove();
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

