(function () {
    'use strict';
    angular.module('noughtsAndCrossesApp')
        .service('gameApi', function ($http, $q) {



            var ServerCallInformation = function (url, data) {
                this.method = 'post';
                this.withCredentials = 'true';
                this.headers = {'content-type': 'application/json'};
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

                var serverCallInformation = new ServerCallInformation('http://EUTAVEG-01.tombola.emea:35000/api/v1.0/newgame', {
                    player1: player1,
                    player2: player2

                });
               return serverCall (serverCallInformation);

            };

            this.makeMove = function (playerNumber, squareNumber) {

                var serverCallInformation = new ServerCallInformation('http://EUTAVEG-01.tombola.emea:35000/api/v1.0/makemove', {
                    playerNumber: playerNumber,
                    chosenSquare: squareNumber
                });

                return serverCall(serverCallInformation);

            };



        });
}());