angular.module('noughtsAndCrossesApp')
    .filter('playerNumberToGamePiece', function () {
        return function (input) {
            if (input === '1') {
                return 'X';
            }else if (input === '2') {
                return 'O';
            }
            return  '';
        };
    });





