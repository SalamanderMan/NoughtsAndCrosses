(function(){
   'use strict';
    describe('Directive tests', function(){
       var compile;
       var rootScope;
       var gameSquare;
       var squareNumber;

        /*beforeEach(module('tombola.noughtsAndCrossesApp.directive'));*/

        beforeEach(
            module(function($provide){
                $provide.value('tombola.noughtsAndCrossesApp.directive' ,'gameSquare', function(value){
                    return value;
                });
            }));

        beforeEach(inject(function($compile, $rootScope){
            compile = $compile;
            rootScope = $rootScope;
        }));

it('Check the square selection directive works', function(){
            var directiveElementHtml = '<game-square squareNumber="0"/>';
            var element = compile (directiveElementHtml)(rootScope);
            rootScope.$digest();

            expect(element[0].toString()).to.be.equal('[object HTMLElement]');
            expect(element.attr('squareNumber')).to.be.equal('0');

        });

it('Check the player selection directive works', function(){
            var directiveElementHtml = '<player-selection playerNumber="1" ></player-selection>';
            var element = compile (directiveElementHtml)(rootScope);
            rootScope.$digest();

            expect(element[0].toString()).to.be.equal('[object HTMLElement]');
            expect(element.attr('playerNumber')).to.be.equal('1');


        });

    });
}());


