noughtsAndCrossesApp.controller('noughtsAndCrossesController', function ($scope,$http,gameModel){
$scope.gameModel = gameModel;

    var serverPost = {
        method: 'POST',
        url: '',
        'withCredentials': 'true',
        headers: {
            'content-type': 'application/json'
        },
        data:''
    };

    $scope.newGame = function () {
        serverPost.url ='http://noughtsAndCrosses.cloudapp.net:35000/api/v1.0/newgame';
        serverPost.data = {'player1':'human','player2':'human'};
        $http(serverPost).success(function (data) {
            $scope.gameMode = data;
        });
    };
    });

    $scope.makeMove = function (squareNumber) {
        serverPost.url = 'http://noughtsAndCrosses.cloudapp.net:35000/api/v1.0/makemove';
        serverPost.data = {'playerNumber': 1, 'chosenSquare': squareNumber};
        $http(serverPost).success(function(data) {
        $scope.gameModel = data;
    });
};
