(function () {
    'use strict';
    angular.module('tombola.noughtsAndCrossesApp.service')
        .service('gameModel', function (gameApiProxy, gameModelConstants) {

            this.gameOutcome = gameModelConstants.initialGameOutcome;
            this.currentGameState = gameModelConstants.initialGameState;
            this.gameWinner = gameModelConstants.defaultGameWinner;
            this.typePlayer1 = gameModelConstants.defaultPlayer1Type;
            this.typePlayer2 = gameModelConstants.defaultPlayer2Type;
            this.currentPlayer = gameModelConstants.defaultPlayer;
            this.winningState = '';

            var me = this;

            var isNewGame = function(){
                return me.currentGameState ==='000000000';
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

             var swapCurrentPlayer = function () {
                if(isNewGame()) {
                    return;
                }
                if(me.typePlayer1 !=='human') {
                    return;
                }
                if(me.typePlayer2 !=='human') {
                    return;
                }
                me.currentPlayer = me.currentPlayer == 1 ? 2 : 1;
            };

            this.setStartingPlayer = function () {
                if (this.typePlayer1 === 'human') {
                    this.currentPlayer = 1;
                } else if (this.typePlayer2 === 'human') {
                    this.currentPlayer = 2;
                }
            };

            this.newGame = function () {
                me.setStartingPlayer();
                var promise = gameApiProxy.newGame(me.typePlayer1, me.typePlayer2);
                me.updateGameBoardUI (promise);
            };

            this.makeMove = function (squareNumber) {
                var promise = gameApiProxy.makeMove(me.currentPlayer, squareNumber);
                me.updateGameBoardUI(promise);

            };

            this.updateGameBoardUI = function (promise) {

                promise.then(function (data) {
                        me.currentGameState = data.gameboard;
                        me.gameOutcome = data.outcome;
                        me.gameWinner = data.winner;
                        swapCurrentPlayer();
                        updateWinningState();
                    },
                    function (data, status) {
                        alert('Server Error:' + status + ' information ' + data);
                    });
            };

            this.togglePlayerChoice1 = function () {

                me.typePlayer1 = cyclePlayerChoice(me.typePlayer1);

            };


            this.togglePlayerChoice2 = function () {

                me.typePlayer2 = cyclePlayerChoice(me.typePlayer2);

            };

            var updateWinningState = function () {
              if (me.gameOutcome === 'Win') {
                  me.winningState = 'win' + me.gameWinner;
              } else if (me.gameOutcome === 'Draw') {
                  me.winningState = 'draw';
              } else  {
                  me.winningState = '';
              }
            };

        });
})();
