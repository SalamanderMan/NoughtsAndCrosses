(function(){
    'use strict';
    describe('Audio service functionality', function(){
        var audioService;
        var audioSprite;
        var audioSpriteMock;
        var sandbox;


        beforeEach(function(){
            module('tombola.noughtsAndCrossesApp.service');

            module(function($provide){
                $provide.value('tombola.noughtsAndCrossesApp.service', 'audioService', 'audioServiceMock', 'audioSprite', mocks, function(value){
                    return value;
                });

            });
            inject(function(_audioService_){
                sandbox = sinon.sandbox.create();
                audioService = _audioService_;
                audioSpriteMock = sinon.sandbox.mock(mocks.audioSpriteMock);

            });
        });


        it('Ensure the audioService functions have the correct values for the newGame block', function(){
            audioSpriteMock
                .expects('playSprite')
                .withArgs('')
                .once();
        });
    });
}());