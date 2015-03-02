(function () {
    'use strict';
    describe('Testing of controller', function(){
        var $httpBackend;
        var gameApiProxy;

        beforeEach(function(){
            module('tombola.noughtsAndCrossesApp.service');
            module(function($provide){
                $provide.constant('gameApiProxyConstants', mocks.gameApiProxyConstants);
            });
            inject(function($injector){
                gameApiProxy = $injector.get('gameApiProxy');
                $httpBackend = $injector.get('$httpBackend');
            });
        });

        it('Ensure the newGame responds with the expected data',function(){
            $httpBackend
                .expectPOST(mocks.gameApiProxyConstants.newGameUrl ,{ player1: 'random', player2: 'human' })
                .respond({ 'outcome': 'continue', 'gameboard': '000000010', 'winner': '0' });
            gameApiProxy.newGame('random', 'human')
                .then(function(data){

                })
                .catch(function(status, message){
                   assert.fail('Unexpected error! '+ status + message);
                });
            $httpBackend.flush();
        });

        it('Ensure the makeMove responds with the expected data', function(){
            $httpBackend
                .expectPOST(mocks.gameApiProxyConstants.makeMoveUrl, {playerNumber: 'playerNumber', chosenSquare: 'squareNumber'})
                .respond(mocks.gameApiProxyConstants.updateGameBoardUI);
            gameApiProxy.makeMove('playerNumber', 'squareNumber')
                .then(function(data){})
                .catch(function(status, message){
                    assert.fail('Unexpected error! ' + status + message)
                });
            $httpBackend.flush();
        });



        afterEach(function(){
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

    });
}());