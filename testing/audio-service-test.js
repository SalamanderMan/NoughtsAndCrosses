(function(){
    'use strict';
    describe('Audio service functionality', function(){
        var audioService = audioService;


        beforeEach(
            module(function($provide){
                $provide.value('tombola.noughtsAndCrossesApp.service', 'audioService', 'audioSprite', mocks, function(value){
                    return value;
                });
                inject(function($injector){
                    audioService = $injector.get('audioService');
                });
            }));

        it('Ensure the audioService functions have the correct values for the newGame block', function(){
            audioService.newGame();
            audioSprite.playSprite();

            expect(audioService.newGame()).to.be.equal('2.5')
        });

        it('Ensure the audioService functions have the correct values for the makeMove block', function(){
            audioService.makeMove();
            audioSprite.playSprite();
            expect(mocks.audioServiceMock.startTime).to.equal('2.5');
        });

    });
}());