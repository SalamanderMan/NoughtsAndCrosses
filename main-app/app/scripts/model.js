/**
 * Created by andrew.welsh on 04/12/2014.
 */

angular.Module = noughtsAndCrossesApp.factory('noughtsAndCrossesApp', function ($http) {

       /* var noughtsAndCrossesApp = function () {
            method: 'post',
            url: '',
            'withCredentials': 'true',

            headers: {
                'content-type': 'application/js:charset=UTF8'
            },
            data: ''
        }; */

angular.Module = newGame.service('newGame', function () {



       var newGame = function () {
            var me = this;
            me.serverPost.url = 'http://tictactoe1.cloudapp.net:35000/api/v1.0/newgame';
            me.serverPost.data = {'player1': me.player1, 'player2': me.player2};
            $http(me.serverPost)

                .success(function (data) {
                    me.response = data.response;
                });
        }
    });

angular.Module = serverPost.service('serverPost', function () {



var serverPost = function () {
    var me = this;
    $http(serverPost).
        success(function (data) {
            me.gameboard = data.gameboard;
            me.outcome = data.outcome;
            me.winner = data.winner;
        });
}});

angular.Module = gameModel.service('gameModel', function() {

this.newGame = function () {
    serverPost.url = 'http://tictactoe1.cloudapp.net:35000/api/v1.0/newgame';
    serverPost.data = {'player1': this.player1, 'player2': this.player2};
    server();
};

var gameModel = function () {
    this.outcome = 'continue';
        this.gameState = '000000000';
        this.winner = 0;
        this.player1 = 'random';
        this.player2 = 'random';

    return new gameModel();
}})});