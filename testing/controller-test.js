(function(){
    'use strict';
    describe('Testing of the controller', function(){
        var scope;
        var noughtsAndCrossesController;
        var sandbox;
        var audioSpriteMock;
        var gameModelMock;

        beforeEach(function(){
            module('tombola.noughtsAndCrossesApp.controllers');
        });

        beforeEach(inject(function($rootScope, $controller){


            sandbox = sinon.sandbox.create();
            gameModelMock = sinon.sandbox.mock(mocks.gameModelMock);
            audioSpriteMock = sinon.sandbox.mock(mocks.audioSpriteMock);


            scope = $rootScope.$new();

            noughtsAndCrossesController = $controller('noughtsAndCrossesController',{
                $scope: scope,
                gameModel: mocks.gameModelMock,
                audioSprite: mocks.audioSpriteMock,
            });

        }));

        it('Check newGame calls the viewModel reset', function(){
            gameModelMock.expects('togglePlayerChoice1')
                .once();
            scope.togglePlayerChoice1();

        });

        it('Check newGame calls the viewModel reset', function(){
            gameModelMock.expects('togglePlayerChoice2')
                .once();
            scope.togglePlayerChoice2();

        });

        afterEach(function(){
            scope.$digest();
            gameModelMock.verify();
            sandbox.restore();
        });

    })
}());
