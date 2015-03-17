(function () {
    'use strict';
    angular.module('tombola.noughtsAndCrossesApp.service')
        .service('gameApiProxy', function ($http, $q, gameApiProxyConstants) {



            var ServerCallInformation = function (url, data) {
                this.method = gameApiProxyConstants.method;
                this.withCredentials = gameApiProxyConstants.withCredentials;
                this.headers = {'content-type': gameApiProxyConstants.contentType};
                this.data = data;
                this.url = url;
            };

            var serverCall = function (serverCallInformation) {
                var deferred = $q.defer();
                $http(serverCallInformation)
                    .success(function (data) {

                        deferred.resolve(data);
                    })
                    .error(function (data, status) {
                        deferred.reject(data, status);
                    });
                return deferred.promise;

            };



            this.newGame = function (player1, player2) {

                var serverCallInformation = new ServerCallInformation(gameApiProxyConstants.newGameUrl, {
                    player1: player1,
                    player2: player2

                });
               return serverCall (serverCallInformation);

            };

            this.makeMove = function (playerNumber, squareNumber) {

                var serverCallInformation = new ServerCallInformation(gameApiProxyConstants.makeMoveUrl, {
                    playerNumber: playerNumber,
                    chosenSquare: squareNumber
                });

                return serverCall(serverCallInformation);

            };



        });
}());