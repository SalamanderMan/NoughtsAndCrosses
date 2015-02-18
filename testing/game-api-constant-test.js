(function () {
    'use strict';
    describe('Testing of gameModel constants', function(){
        var gameModel;

        beforeEach(function($injector){
           module('tombola.noughtsAndCrossesApp.service');
            gameModel = $injector.get('gameModel');
        });

        it('Ensure the gameModel sets correctly', function(){
            assert.equal('000000000', gameModel.gameState);
        });

        afterEach( function(){

        });
    });
}());