(function () {
    'use strict';
    describe('Testing of gameModel constants', function(){
        var gameModelConstants;

        beforeEach(function(){
            module('tombola.noughtsAndCrossesApp.service');
            inject(function($injector){
                gameModelConstants = $injector.get('gameModelConstants');
            });
        });

        it('Ensure the player numbers are set to the correct values in the newGame server call', function(){
            expect(gameModelConstants.defaultPlayer1Type).to.equal('human');
            expect(gameModelConstants.defaultPlayer2Type).to.equal('random');
        });

        it('Ensure the game initialises with player 1 as the default current player - this should be the case as player 1 is initialised as a human player', function(){
            expect(gameModelConstants.defaultPlayer).to.equal('1');
        });

        it('Ensure the game starts with the winner as zero - there should be no winner at the start of the game', function(){
            expect(gameModelConstants.defaultGameWinner).to.equal('0');
        });

        it('Ensure the initial winning state is blank, there should only be a winning state if the game is in play', function(){
            expect(gameModelConstants.initialGameState).to.equal('000000000');
        });

        it('Ensure the gameOutcome is set to blank at the start, as any other value would indicate that the game has been played already', function(){
            expect(gameModelConstants.initialGameOutcome).to.equal('continue');
        })

    });
}());
