(function () {
    angular.module('noughtsAndCrossesApp')
    .controller('noughtsAndCrossesController', function ($scope, $http, gameModel) {

        $scope.gameModel = gameModel;

        $scope.newGame = function () {
            console.log('todo new game');
            gameModel.newGame();
        };

        $scope.makeMove = function (squareNumber) {
            console.log('make movegame');
        };
            $scope.togglePlayerChoice1 = function () {
                gameModel.togglePlayerChoice1();
            };

            $scope.togglePlayerChoice2 = function () {
                gameModel.togglePlayerChoice2();
            };
    });
}());

