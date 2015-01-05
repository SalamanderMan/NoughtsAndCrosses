angular.module('noughtsAndCrossesApp')
    .filter('playerNumberToGamePiece', function () {
        return function (input) {
            if (input === '1') {
                return 'O';
            } else if (input === '2') {
                return 'X';
            }
            return '';
        };
    });





