/*
(function(){
   'use strict';
    describe('Game square tests', function(){
       var compile;
       var rootScope;

        beforeEach(module('tombola.noughtsAndCrossesApp.directive'));

        beforeEach(
            module(function($provide){
                $provide.value('gameSquare', function(value){
                    return value;
                });
            }));

        beforeEach(inject(function($compile, $rootScope){
            compile = $compile;
            rootScope = $rootScope;
        }));

        */
/*it('Check the directive works', function(){
            var directiveElementHtml = '<game-square number="0"></game-square>';
            var element = compile (directiveElementHtml)(rootScope);
            rootScope.$digest();

            expect(element[0].toString()).to.be.equal('object HTMLElement');
            expect(element.attr(number)).to.be.equal('0');
            expect(element[0].children.length).to.equal(1);
        });*//*


    });
}());
*/

