(function () {
    angular.module('noughtsAndCrossesApp')
    .service('gameModel', function () {

        this.outcome = 'continue';
        this.gameState = '000000001';
        this.winner = 0;
        this.player1 = 'random';
        this.player2 = 'random';

        this.newGame = function () {
            //TODO: Call API Wrapper to make service call
        };

        //todo: make move.....
    });
}());
