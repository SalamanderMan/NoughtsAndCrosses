(function(){
    'use strict';
    describe('Directive test for the square selection functionality', function(){
        var compile;
        var rootScope;



        beforeEach(
            module(function($provide){
                $provide.value('tombola.noughtsAndCrossesApp.directive' ,'gameSquare', mocks.directiveMocks, function(value){

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
            expect(element.find('game-square').length).to.equal(0);

        });

        it('Check the functionality of the ng-click within the squareSelection directive', function(){
            var directiveElementHtml = '<game-square squareNumber="0"/>';
            var htmlElement = compile (directiveElementHtml)(rootScope);
            rootScope.$digest();
            expect(htmlElement.attr('ng-click')).to.be.equal(mocks.directiveMocks.makeMove());
        });

        it('Check the functionality of the img src and class within the squareSelection directive', function(){
            var directiveElementHtml = '<game-square squareNumber="0"/>';
            var htmlElement = compile (directiveElementHtml)(rootScope);
            rootScope.$digest();
            expect(htmlElement.attr('img src')).to.be.equal(mocks.directiveMocks.imgSrc());
        });



    });
}());