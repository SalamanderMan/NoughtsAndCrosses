angular.module('noughtsAndCrossesApp')
    .filter('playerNumberToGamePiece', function () {
        return function (input) {
            if (input === '1' || input === '2') {
                return 'player' + input;
            }
            return '';
        };
    });





