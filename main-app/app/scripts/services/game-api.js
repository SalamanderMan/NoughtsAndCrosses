(function () {
    'use strict';
    angular.module('noughtsAndCrossesApp')
        .service('gameApi', function ($http, $q) {

        //TODO: Sort this out......

            var ServerCallInformation = function(url, data){
                this.method = 'post';
                this.withCredentials='true';
                this.headers = {  'content-type' : 'application/json' };
                this.data = data;
                this.url= url;
            };

            this.newGame = function (player1, player2) {
                console.log('calling new game');
                var deferred = $q.defer();
                var serverCallInformation = new ServerCallInformation('http://EUTAVEG-01.tombola.emea:35000/api/v1.0/newgame', {player1: player1, player2:player2 });
                $http(serverCallInformation)
                    .success(function (data) {
                        //TODO: pre-convert the data
                        deferred.resolve(data);
                    })
                    .error(function(data, status){
                        deferred.reject(data, status);
                    });

                console.log('new game ended');
                return deferred.promise;
            };
        });
}());