(function () {
    angular.module('tombola.noughtsAndCrossesApp.controllers')
    .controller('noughtsAndCrossesController', function ($scope, $http, gameModel, audioService) {

        $scope.gameModel = gameModel;

        $scope.newGame = function () {
            audioService.newGame();
            gameModel.newGame();

        };

        $scope.makeMove = function (squareNumber) {
            gameModel.makeMove(squareNumber);
            audioService.makeMove();
        };

        $scope.togglePlayerChoice1 = function () {
            gameModel.togglePlayerChoice1();
        };

        $scope.togglePlayerChoice2 = function () {
            gameModel.togglePlayerChoice2();
        };
    });
}());

