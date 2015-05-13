(function(){
    'use strict';
    describe('Directive test for the square selection functionality', function(){
        var compile;
        var rootScope;

        beforeEach(module('tombola.noughtsAndCrossesApp.directive'));

        beforeEach(module(function($provide){
            $provide.value('playerNumberToGamePieceFilter', mocks.filterMock);
        }));

        beforeEach(inject(function($compile, $rootScope){
            compile = $compile;
            rootScope = $rootScope;
        }));


        it('Check the square selection directive works', function(){
            var directiveElementHtml = '<game-square squareNumber="0"/>';
            var element = compile (directiveElementHtml)(rootScope);
            rootScope.$digest();

            expect(element[0].toString()).to.be.equal('[object HTMLImageElement]');
            expect(element.attr('squareNumber')).to.be.equal('0');
            expect(element.find('game-square').length).to.equal(0);
            expect(element.attr('ng-click')).to.be.equal('makeMove(0)');
            expect(element.attr('class')).to.be.equal('gameSquare ');
            expect(element.attr('src')).to.be.equal('');
        });
    });
}());