(function () {'use strict';
    angular.module('noughtsAndCrossesApp')
    .service('gameModel', function () {

        this.outcome = 'continue';
        this.gameState = '000000001';
        this.winner = 0;
        this.player1 = 'human';
        this.player2 = 'human';
        this.currentPlayer = 1;
        this.newGame = function () {
            //TODO: Call API Wrapper to make service call
        };

            var cyclePlayerChoice = function (currentPlayer){
            if(currentPlayer === 'human') { return 'random';}
            else if (currentPlayer === 'random') {return 'pre-trained';}
                return 'human';

            };

            this.togglePlayerChoice1 = function () {
                var me = this;
                me.player1 = cyclePlayerChoice(me.player1);

            };       //todo: make move.....

            this.togglePlayerChoice2 = function () {
                var me = this;
                me.player2 = cyclePlayerChoice(me.player2);

            };
    });
}());


