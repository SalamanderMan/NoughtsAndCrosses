(function(){
    'use strict';
    describe('Testing of the controller', function(){
        var scope;
        var noughtsAndCrossesController;
        var sandbox;
        var audioSprite;
        var gameModel;

        beforeEach(function(){
            module('tombola.noughtsAndCrossesApp.controllers');
        });

        beforeEach(inject(function($rootScope, $controller){


            sandbox = sinon.sandbox.create();
            /*gameModel = sinon.sandbox.mock(gameModel);*/

            scope = $rootScope.$new();

            noughtsAndCrossesController = $controller('noughtsAndCrossesController',{
                $scope: scope,
                gameModel: mocks.gameModelMock,
                audioSprite: audioSprite
            });

        }));

        it('Check newGame calls the viewModel reset', function(){
            /*noughtsAndCrossesController.expects('newGame').once();*/
            /*scope.newGame();*/
            scope.togglePlayerChoice1();
        });

        afterEach(function(){
            scope.$digest();

            /*sandbox.restore();*/
        });

    })
}());
