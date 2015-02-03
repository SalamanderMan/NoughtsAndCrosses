(function(){
    angular.module('noughtsAndCrossesApp')
        .service('audioSprite', function($document) {
            var audioElement;

            var setUpAudioSprite = function(){

                var document = $document[0];
                audioElement = document.createElement('audio');

            };

            this.newGame = function() {
              
                defaultSpriteValues();

            };

            this.makeMove = function (){

                defaultSpriteValues();

            };



            var defaultSpriteValues = function () {
                var source = document.createElement('source');
                source.src = 'sounds/audio-sprite.mp3';
                source.type = 'audio/mpeg';
                audioElement.appendChild(source);
                document.body.appendChild(audioElement);

                audioElement.currentTime = 3.3;
                setTimeout(function(){
                    audioElement.pause ();
                },3300);
                audioElement.play();
            };

            setUpAudioSprite();

        });
}());
