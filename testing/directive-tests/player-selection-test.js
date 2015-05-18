(function(){
    'use strict';
    describe('Directive test for the player selection functionality', function(){
        var compile;
        var rootScope;

        beforeEach(module('tombola.noughtsAndCrossesApp.directive'));

        beforeEach(
            module(function($provide){
                $provide.value('tombola.noughtsAndCrossesApp.directive', 'playerSelection' , mocks.directiveMocks ,function(value){
                    return value;
                });
            }));

        beforeEach(inject(function($compile, $rootScope){
            compile = $compile;
            rootScope = $rootScope;

        }));

        it('Check the player selection directive works', function(){
            var directiveElementHtml = '<player-selection playerNumber="1" ></player-selection>';
            var element = compile (directiveElementHtml)(rootScope);
            rootScope.$digest();

            expect(element[0].toString()).to.be.equal('[object HTMLImageElement]');
            expect(element.attr('playerNumber')).to.be.equal('1');
            expect(element.attr('src')).to.be.equal('');
            expect(element.attr('ng-click')).to.equal('togglePlayerChoice1()');
            expect(element.attr('class')).to.be.equal('playerSelection');
        });


    });
}());