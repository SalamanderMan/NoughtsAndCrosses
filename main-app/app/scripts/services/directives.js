(function(){
//Todo: Square Selection Directive
angular.module('noughtsAndCrossesApp')
    .directive('gameSquare', function  (){
     return {
         restrict:   'E',
         replace:    true,
         transclude: false,
         template:   function(scope, attr) {
             return '<img src="" class="gameSquare {{ gameModel.gameState[' + attr.squarenumber + '] | playerNumberToGamePiece }}" ng-click="makeMove(' + attr.squarenumber + ')">';
         },
     };
    });
}());
//Todo: Player Selection Directive
(function(){
    angular.module('noughtsAndCrossesApp')
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
}());