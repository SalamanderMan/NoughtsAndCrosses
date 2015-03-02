(function () {
    'use strict';
    angular.module('tombola.noughtsAndCrossesApp.service')
        .constant('gameModelObjects', {
            typePlayer1:'player1',
            typePlayer2:'player2',
            playerNumber: 'playerNumber',
            chosenSquare: 'squareNumber',
            method: 'post',
            withCredentials: 'true',
            data: 'data',
            url: 'url',
            currentPlayer: '1',
            gameWinner: 0,
            winningState: '',
            gameOutcome: 'continue',
        });
}());
