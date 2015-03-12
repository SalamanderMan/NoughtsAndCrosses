(function () {
    'use strict';
    describe('Testing of gameModel objects', function(){
        var gameModel;

        beforeEach(function(){
            module('tombola.noughtsAndCrossesApp.service');
            module(function($provide){
                $provide.constant('gameModelConstants', mocks.gameModelConstants);
                $provide.value('gameApiProxy', mocks.gameApiProxyMock)
            });
            inject(function($injector){
                gameModel = $injector.get('gameModel');

            });
        });

        it('Ensure the currentGameState within the updateGameBoardUI function has the correct value', function(){
            expect(gameModel.currentGameState).to.equal(mocks.gameModelConstants.initialGameState);
        });

        it('Ensure the gameOutcome within the updateGameBoardUI function has the correct value', function(){
           expect(gameModel.gameOutcome).to.equal(mocks.gameModelConstants.initialGameOutcome);
        });

        it('Ensure the gameWinner within is set to the correct value', function(){
           expect(gameModel.gameWinner).to.equal(mocks.gameModelConstants.defaultGameWinner);
        });

        it('Ensure the typePlayer1 in togglePlayerChoice1 is set to the correct value', function(){
         expect(gameModel.typePlayer1).to.equal(mocks.gameModelConstants.defaultPlayer1Type);
         });

         it('Ensure the typePlayer2 in togglePlayerChoice2 is set to the correct value', function(){
         expect(gameModel.typePlayer2).to.equal(mocks.gameModelConstants.defaultPlayer2Type);
         });

        //Todo: Test togglePlayer methods
        it('Ensure the typePlayer1 in togglePlayerChoice1 is set to the correct value', function(){
            expect(gameModel.typePlayer1).to.equal('random');
        });

        it('Ensure the typePlayer2 in togglePlayerChoice is set to the correct value', function(){
           expect(gameModel.typePlayer2).to.equal('human');
        });

        it('Check typePlayer1 after switch when the player is set to human', function(){
           gameModel.typePlayer1 = 'human';
            gameModel.togglePlayerChoice1();
            expect(gameModel.typePlayer1).to.equal('random');
        });

        it('Check typePlayer1 after switch when the player is set to random', function(){
           gameModel.typePlayer1 = 'random';
            gameModel.togglePlayerChoice1();
            expect(gameModel.typePlayer1).to.equal('pre-trained');
        });

        it('Check typePlayer1 after switch when the player is set to pre-trained', function(){
            gameModel.typePlayer1 = 'pre-trained';
            gameModel.togglePlayerChoice1();
            expect(gameModel.typePlayer1).to.equal('human');
        });

        it('Check typePlayer2 after switch when the player is set to human', function(){
            gameModel.typePlayer2 = 'human';
            gameModel.togglePlayerChoice2();
            expect(gameModel.typePlayer2).to.equal('random');
        });

        it('Check typePlayer2 after switch when the player is set to random', function(){
            gameModel.typePlayer2 = 'random';
            gameModel.togglePlayerChoice2();
            expect(gameModel.typePlayer2).to.equal('pre-trained');
        });

        it('Check typePlayer2 after switch when the player is set to pre-trained', function(){
            gameModel.typePlayer2 = 'pre-trained';
            gameModel.togglePlayerChoice2();
            expect(gameModel.typePlayer2).to.equal('human');
        });

        it('Check currentPlayer after swapCurrentPlayer for a human versus random game', function(){
            gameModel.swapCurrentPlayer();
            expect(gameModel.currentPlayer).to.equal('1');
        });

        it('Check current after swapCurrentPlayer for a human versus human game', function(){
            gameModel.player1 = 'human';
            gameModel.player2 = 'human';
            gameModel.currentPlayer = 1;
            gameModel.swapCurrentPlayer();
            expect(gameModel.currentPlayer).to.equal(1);
        });

        it('Check current after swapCurrentPlayer for a human versus human game', function(){
            gameModel.player1 = 'human';
            gameModel.player2 = 'pre-trained';
            gameModel.currentPlayer = 1;
            gameModel.swapCurrentPlayer();
            expect(gameModel.currentPlayer).to.equal(1);
        });

        it('Check current after swapCurrentPlayer for a random versus human game', function(){
           gameModel.player1 = 'random';
            gameModel.player2 = 'human';
            gameModel.currentPlayer = 2;
            gameModel.swapCurrentPlayer();
            expect(gameModel.currentPlayer).to.equal(2);
        });

        it('Check currentPlayer after swapCurrentPlayer for a random versus human', function(){
           gameModel.player1 = 'random';
            gameModel.player2 = 'human';
            gameModel.currentPlayer = 2;
            gameModel.swapCurrentPlayer();
            expect(gameModel.currentPlayer).to.equal(2);
        });

        it('Check currentPlayer after swapCurrentPlayer for a random versus pre-trained', function(){
            gameModel.player1 = 'random';
            gameModel.player2 = 'pre-trained';
            gameModel.currentPlayer = 1;
            gameModel.swapCurrentPlayer();
            expect(gameModel.currentPlayer).to.equal(1);
        });

        it('Check currentPlayer after swapCurrentPlayer for a pre-trained versus human', function(){
            gameModel.player1 = 'pre-trained';
            gameModel.player2 = 'human';
            gameModel.currentPlayer = 1;
            gameModel.swapCurrentPlayer();
            expect(gameModel.currentPlayer).to.equal(1);
        });

        it('Check currentPlayer after swapCurrentPlayer for a pre-trained versus human', function(){
            gameModel.player1 = 'pre-trained';
            gameModel.player2 = 'random';
            gameModel.currentPlayer = 1;
            gameModel.swapCurrentPlayer();
            expect(gameModel.currentPlayer).to.equal(1);
        });

        it('Check currentPlayer after swapCurrentPlayer for a pre-trained versus human', function(){
            gameModel.player1 = 'pre-trained';
            gameModel.player2 = 'pre-trained';
            gameModel.currentPlayer = 1;
            gameModel.swapCurrentPlayer();
            expect(gameModel.currentPlayer).to.equal(1);
        });

        it('Check currentPlayer corresponds to the alteration in typePlayer2', function(){
            gameModel.typePlayer1 = 'human';
            gameModel.currentPlayer = 1;
            expect(gameModel.currentPlayer).to.equal(1)
        });

        it('Check currentPlayer corresponds to the alteration in typePlayer1', function(){
            gameModel.typePlayer2 = 'human';
            gameModel.currentPlayer = 2;
            expect(gameModel.currentPlayer).to.equal(2)
        });


    });
}());