(function(){
    'use strict';
    describe('Audio service functionality', function(){

        var document = $document;
        var audioSprite = audioSprite;

        beforeEach(
            module(function($provide){
                $provide.value('tombola.noughtsAndCrossesApp.service', 'audioSprite', function(value){
                    return value;
                });
            }));

        beforeEach(inject(function($injector){
            audioSprite = $injector.get('audioSprite')
        }));

        it('Ensure the audioSprite is using the correct file', function(){

        });

    });
});