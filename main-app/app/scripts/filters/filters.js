angular.module('noughtsAndCrossesApp')
    .filter('playerNumberToGamePiece', function () {
        return function () {
            return 'X';

        };
    }
);