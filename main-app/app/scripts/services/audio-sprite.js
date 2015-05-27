(function(){
    'use strict';
    angular.module('tombola.noughtsAndCrossesApp.service')
        .service('audioSprite', function($document, $timeout) {
            var audioElement,
                me = this,
                setUpAudioSprite = function(){
                    audioElement = angular.element('<audio />');
                    audioElement.append(angular.element('<source src="sounds/audio-sprite.mp3" type="audio/mpeg"/>'));
                    $document[0].body.appendChild(audioElement[0]);
                };

            me.playSprite = function (startTime, length) {
                audioElement[0].currentTime = startTime;
                audioElement[0].play();
                $timeout(function(){
                    audioElement[0].pause ();
                }, length * 1000);
            };
            setUpAudioSprite();
        });
}());
