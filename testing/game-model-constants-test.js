(function () {
    'use strict';
    describe('Testing of gameModel constants', function(){
        var gameModel;

        beforeEach(function(){
            module('tombola.noughtsAndCrossesApp.service');
            inject(function($injector){
                gameModel = $injector.get('gameModel', mocks.gameModelMocks);
            });
        });

        it('Ensure the player numbers are set to the correct values in the newGame server call', function(){
            expect(mocks.gameModelMocks.player1).to.equal('player1');
            expect(mocks.gameModelMocks.player2).to.equal('player2');
        });

        it('Ensure the chosenSquare and playerNumber objects are set to the correct values within the makeMove function', function(){
            expect(mocks.gameModelMocks.chosenSquare).to.equal('squareNumber');
            expect(mocks.gameModelMocks.playerNumber).to.equal('playerNumber');
        });

        it('Ensure the ServerCallInformation method is a post', function(){
            expect(mocks.gameModelMocks.method).to.equal('post');
        });

        it('Ensure the ServerCallInformation is declared with true credentials', function(){
            expect(mocks.gameModelMocks.withCredentials).to.equal('true');
        });

        it('Ensure the correct injection is passed into the data object', function(){
            expect(mocks.gameModelMocks.data).to.equal('data');
        });

        it('Ensure the correct injection is passed into the url object', function(){
            expect(mocks.gameModelMocks.url).to.equal('url');
        });

        it('Ensure the game initialises with player 1 as the default current player - this should be the case as player 1 is initialised as a human player', function(){
            expect(mocks.gameModelMocks.currentPlayer).to.equal('1')
        });

        it('Ensure the game starts with the winner as zero - there should be no winner at the start of the game', function(){
            expect(mocks.gameModelMocks.gameWinner).to.equal('0')
        });

        it('Ensure the initial winning state is blank, there should only be a winning state if the game is in play', function(){
            expect(mocks.gameModelMocks.winningState).to.equal('')
        });

        it('Ensure the gameOutcome is set to blank at the start, as any other value would indicate that the game has been played already', function(){
            expect(mocks.gameModelMocks.gameOutcome).to.equal('gameOutcome' || 'continue')
        })

    });
}());
