(function () {
    'use strict';
    describe('Testing of gameApiProxy constants', function(){
        var gameApiProxyConstants;

        beforeEach(function(){
            module('tombola.noughtsAndCrossesApp.service');
            inject(function($injector){
                gameApiProxyConstants = $injector.get('gameApiProxyConstants');
            });
        });

        it('Ensure the newGameUrl is set to the correct value', function(){
            expect(gameApiProxyConstants.newGameUrl).to.equal('http://EUTAVEG-01.tombola.emea:35000/api/v1.0/newgame');
        });

        it('Ensure the makeMoveUrl is set to the correct value', function(){
            expect(gameApiProxyConstants.makeMoveUrl).to.equal('http://EUTAVEG-01.tombola.emea:35000/api/v1.0/makemove');
        });

        it('Ensure the ServerCallInformation method is a post', function(){
            expect(gameApiProxyConstants.method).to.equal('post');
        });

        it('Ensure the ServerCallInformation is declared with true credentials', function(){
            expect(gameApiProxyConstants.withCredentials).to.equal('true');
        });

        it('Ensure the contentType is set to correct value', function(){
            expect(gameApiProxyConstants.contentType).to.equal('application/json');
        });

    });
}());

