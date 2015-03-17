(function () {
    angular.module('tombola.noughtsAndCrossesApp.controllers')
    .controller('noughtsAndCrossesController', function ($scope, $http, gameModel, audioSprite) {

        $scope.gameModel = gameModel;

        $scope.newGame = function () {
            audioSprite.newGame();
            gameModel.newGame();

        };

        $scope.makeMove = function (squareNumber) {
            gameModel.makeMove(squareNumber);
            audioSprite.makeMove();
        };


        $scope.togglePlayerChoice1 = function () {
            gameModel.togglePlayerChoice1();
        };

        $scope.togglePlayerChoice2 = function () {
            gameModel.togglePlayerChoice2();
        };
    });
}());

