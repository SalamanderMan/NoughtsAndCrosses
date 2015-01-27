(function () {
    'use strict';
    angular.module('noughtsAndCrossesApp')
        .service('gameModel', function (gameApi) {

            this.outcome = 'continue';
            this.gameState = '000000000';
            this.winner = 0;
            this.player1 = 'human';
            this.player2 = 'random';
            this.currentPlayer = 1;

            var cyclePlayerChoice = function (currentPlayer) {
                if (currentPlayer === 'human') {
                    return 'random';
                }
                else if (currentPlayer === 'random') {
                    return 'pre-trained';
                }
                return 'human';
            };


            this.toggleCurrentPlayer = function () {
                if(this.player1 ==='human' && this.player2 ==='human'){
                    this.currentPlayer = this.currentPlayer == 1 ? 2 : 1;
                }
            };

            this.setStartingPlayer = function () {
                if (this.player1 === 'human') {
                    this.currentPlayer = 1;
                } else if (this.player2 === 'human') {
                    this.currentPlayer = 2;
                }
            };

            this.newGame = function () {
                var me = this;
                gameApi.newGame(me.player1, me.player2)
                    .then(function (data) {


                        me.setStartingPlayer();
                        me.gameState = data.gameboard;
                    },
                    function (data, status) {
                        alert('Server Error:' + status + ' information ' + data);
                    });
            };

            this.makeMove = function (squareNumber) {
                var me = this;
                gameApi.makeMove(me.currentPlayer, squareNumber)
                    .then(function (data) {
                        me.toggleCurrentPlayer();
                        me.gameState = data.gameboard;
                    },
                    function (data, status) {
                        alert('Server Error:' + status + ' information ' + data);
                    });
            };

            this.togglePlayerChoice1 = function () {
                var me = this;
                me.player1 = cyclePlayerChoice(me.player1);

            };


            this.togglePlayerChoice2 = function () {
                var me = this;
                me.player2 = cyclePlayerChoice(me.player2);

            };
        });
})();



