(function () {
    'use strict';
    angular.module('tombola.noughtsAndCrossesApp.service')
        .constant('gameModelConstants', {
            defaultPlayer1Type:'human',
            defaultPlayer2Type:'random',
            initialGameState: '000000000',
            defaultGameWinner: '0',

            initialGameOutcome: 'continue',
            defaultPlayer: '1'
        });
}());
