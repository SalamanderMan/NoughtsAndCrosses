(function(){
//Todo: Square Selection Directive
angular.module('noughtsAndCrossesApp')
    .directive('squareSelectionDir', function  ($scope, makeMove){
        console.log('***Square Selected***');
        makeMove();
    });
}());