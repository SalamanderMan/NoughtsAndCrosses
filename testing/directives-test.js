(function(){
   'use strict';
    describe('Game square tests', function(){
       var compile;
       var rootScope;

        beforeEach(module('tombola.noughtsAndCrossesApp.directive'));

        beforeEach(
            module(function($provide){
                $provide.value('numberToSquareFilter', function(value){
                    return value;
                });
            }));

        beforeEach(inject(function($compile, $rootScope){
            compile = $compile;
            rootScope = $rootScope;
        }));

        it('Check if the directive works', function(){
            var directiveElement = '<td><game-square squareNumber="0"/></td>';
            rootScope.viewModel = {getLastPlayedBoard: function(){return '122221222';}};
            var element = compile(directiveElement)(rootScope);
            rootScope.$digest();

            expect(element[0].toString()).to.be.equal('[Html element]');
            expect(element.attr('number')).to.be.equal('2');
            expect(element[0].children.length).to.equal(1);
            var innerElement = element[0].children[0];
            expect(innerElement.toString()).to.be.equal('[Html element]');
            expect(innerElement.innerHTML).to.be.equal('1')
        });



    });
});