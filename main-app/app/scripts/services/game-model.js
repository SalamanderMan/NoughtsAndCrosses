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

            var me = this;

            var isNewGame = function(){
                return me.gameState ==='000000000';
            };

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
                if(isNewGame()) {
                    return;
                }
                if(this.player1 !=='human') {
                    return;
                }
                if(this.player2 !=='human'){
                    return;
                }
                this.currentPlayer = this.currentPlayer == 1 ? 2 : 1;
            };

            this.setStartingPlayer = function () {
                if (this.player1 === 'human') {
                    this.currentPlayer = 1;
                } else if (this.player2 === 'human') {
                    this.currentPlayer = 2;
                }
            };

            this.newGame = function () {
                me.setStartingPlayer();
                me.updateGameBoard (gameApi.newGame(me.player1, me.player2));
            };

            this.makeMove = function (squareNumber) {
                me.updateGameBoard(gameApi.makeMove(me.currentPlayer, squareNumber));
            };

            this.updateGameBoard = function (promise) {

                promise.then(function (data) {
                        me.gameState = data.gameboard;
                        me.toggleCurrentPlayer();
                    },
                    function (data, status) {
                        alert('Server Error:' + status + ' information ' + data);
                    });
            };

            this.togglePlayerChoice1 = function () {

                me.player1 = cyclePlayerChoice(me.player1);

            };


            this.togglePlayerChoice2 = function () {

                me.player2 = cyclePlayerChoice(me.player2);

            };
        });
})();



