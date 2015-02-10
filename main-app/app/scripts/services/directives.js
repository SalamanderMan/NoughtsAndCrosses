/*(function(){*/

angular.module('tombola.noughtsAndCrossesApp.directives.gameSquare')
    .directive('gameSquare', function  (){
     return {
         restrict:   'E',
         replace:    true,
         transclude: false,
         template:   function(scope, attr) {

             return '<img src="" class="gameSquare {{ gameModel.gameState[' + attr.squarenumber + ']  | playerNumberToGamePiece }}" ng-click="makeMove(' + attr.squarenumber + ')">';
         },
     };
    });
/*}());*/

/*(function(){*/

    angular.module('tombola.noughtsAndCrossesApp.directives.playerSelection')
        .directive('playerSelection', function  (){
            return {
                restrict:   'E',
                replace:    true,
                transclude: false,
                template:   function(scope, attr) {
                    var playerNumber = attr.playernumber;
                    return '<img src="" class="playerSelection ' + '{{gameModel.player' + playerNumber + '}}' + '" ng-click="togglePlayerChoice' + playerNumber + '()">';
                },
            };
        });
/*}());*/
