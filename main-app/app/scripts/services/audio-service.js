(function(){
    angular.module('tombola.noughtsAndCrossesApp.service')
        .service('audioSprite', function($document) {
            var audioElement;

            var setUpAudioSprite = function(){
                var document = $document[0];
                audioElement = document.createElement('audio');
                var source = document.createElement('source');
                source.src = 'sounds/audio-sprite.mp3';
                source.type = 'audio/mpeg';
                audioElement.appendChild(source);
                document.body.appendChild(audioElement);
            };

            this.newGame = function() {
                playSprite(2.5, 3200);
            };

            this.makeMove = function (){
                playSprite(0.8, 1000);
            };

            var playSprite = function (startTime, duration) {
                audioElement.currentTime = startTime;
                setTimeout(function(){
                    audioElement.pause ();
                },duration);
                audioElement.play();
            };

            setUpAudioSprite();

        });
}());
