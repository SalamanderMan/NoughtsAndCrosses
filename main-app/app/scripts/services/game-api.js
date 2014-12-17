(function () {
    angular.module('noughtsAndCrossesApp')
        .service('gameApi', function () {

        //TODO: Sort this out......

        var noughtsAndCrosses = function (url,data) {
            var serverCall = {

            method: 'post',
            url: url,
            'withCredentials': 'true',

            headers: {
                'content-type': 'application/js:charset=UTF8'
            },
            data: data
        };
            $http(serverCall).success(function(){}).error(function () {

            });



        var serverPost = function () {
            var me = this;
            $http(serverPost).
                success(function (data) {
                    me.gameboard = data.gameboard;
                    me.outcome = data.outcome;
                    me.winner = data.winner;
                });
        };

        this.newGame = function () {
            var me = this;

            me.serverPost.url = 'http://tictactoe1.cloudapp.net:35000/api/v1.0/newgame';
            me.serverPost.data = {'player1': me.player1, 'player2': me.player2};
            $http(me.serverPost)
                .success(function (data) {
                    me.response = data.response;
                });
        };
    };});
}());