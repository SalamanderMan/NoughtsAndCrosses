(function(){
//Todo: Square Selection Directive
angular.module('noughtsAndCrossesApp')
    .directive('gameSquare', function  (){
     return {
         restrict: 'E',
         replace: true,
         transclude:false,
         template: function(scope, moveNumber) {
             return '<img src="" class="gameSquare {{ gameModel.gameState[' + moveNumber.squareNumber + '] | playerNumberToGamePiece }}" ng-click="makeMove(' + moveNumber.squareNumber + ')">';
         },
     };
    });
}());