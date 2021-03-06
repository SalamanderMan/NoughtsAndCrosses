(function () {
    'use strict';
    angular.module('tombola.noughtsAndCrossesApp.service')
        .constant('gameApiProxyConstants', {
            method: 'post',
            withCredentials: 'true',
            contentType: 'application/json',
            newGameUrl:'http://EUTAVEG-01.tombola.emea:35000/api/v1.0/newgame',
            makeMoveUrl: 'http://EUTAVEG-01.tombola.emea:35000/api/v1.0/makemove',
        });
}());
