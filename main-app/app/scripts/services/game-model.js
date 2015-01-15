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

            this.newGame = function () {
                var me = this;
                gameApi.newGame(me.player1, me.player2)
                    .then(function (data) {
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
                        me.gameState = data.gameboard;
                    },
                    function (data, status) {
                        alert('Server Error:' + status + ' information ' + data);
                    });
            };


            //TODO: RE-instate later
            var cyclePlayerChoice = function (currentPlayer) {
                if (currentPlayer === 'human') {
                    return 'random';
                }
                else if (currentPlayer === 'random') {
                    return 'pre-trained';
                }
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


            this.currentPlayer = (this.player1 && this.player2 !=='human'); 


            /*this.currentPlayer = function () {
                if (this.player1 == 'human') {
                    return;
                }
                else if (this.player2 == 'human') {
                    return;
                }
                this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
            };*/

        });
        }());



