(function(){
    'use strict';
    angular.module('tombola.noughtsAndCrossesApp.service')
        .service('audioService', function(audioSprite) {

            this.newGame = function() {
                audioSprite.playSprite(2.5, 3.2);
            };

            this.makeMove = function (){
                audioSprite.playSprite(0.8, 1);
            };

        });
}());
