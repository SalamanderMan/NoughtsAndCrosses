(function () {
    'use strict';
    describe('Testing of gameModel objects', function(){
        var gameModel;

        beforeEach(function(){
            module('tombola.noughtsAndCrossesApp.service');
            module(function($provide){
                $provide.constant('gameApiProxyConstants', mocks.gameModelMocks);
            });
            inject(function($injector){
                gameModel = $injector.get('gameModel');

            });
        });

        it('Ensure the currentGameState within the updateGameBoardUI function has the correct value', function(){
            expect(mocks.gameModelMocks.currentGameState).to.equal('gameboard')
        });

        it('Ensure the gameOutcome within the updateGameBoardUI function has the correct value', function(){
           expect(mocks.gameModelMocks.gameOutcome).to.equal('gameOutcome' || 'continue')
        });

        it('Ensure the gameWinner within the updateGameBoardUI function has the correct value', function(){
           expect(mocks.gameModelMocks.gameWinner).to.equal('0')
        });

        it('Ensure the typePlayer1 in togglePlayerChoice1 is set to the correct value', function(){
            expect(mocks.gameModelMocks.togglePlayer1).to.equal('togglePlayer1')
        });

        it('Ensure the typePlayer2 in togglePlayerChoice is set to the correct value', function(){
           expect(mocks.gameModelMocks.togglePlayer2).to.equal('togglePlayer2')
        });


    });
}());