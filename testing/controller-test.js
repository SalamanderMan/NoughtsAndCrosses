(function(){
    'use strict';
    describe('Testing of the controller', function(){
        var scope;
        var noughtsAndCrossesController;
        var sandbox;
        var audioSpriteMock;
        var audioServiceMock;
        var gameModelMock;

        beforeEach(function(){
            module('tombola.noughtsAndCrossesApp.controllers');
        });

        beforeEach(inject(function($rootScope, $controller){


            sandbox = sinon.sandbox.create();
            gameModelMock = sinon.sandbox.mock(mocks.gameModelMock);
            audioSpriteMock = sinon.sandbox.mock(mocks.audioSpriteMock);
            audioServiceMock = sinon.sandbox.mock(mocks.audioServiceMock);


            scope = $rootScope.$new();

            noughtsAndCrossesController = $controller('noughtsAndCrossesController',{
                $scope: scope,
                gameModel: mocks.gameModelMock,
                audioSprite: mocks.audioSpriteMock,
                audioService: mocks.audioServiceMock
            });

        }));

        it('Check the status of togglePlayerChoice1 in the controller, function should only be called once upon execution, resulting in interaction between script and user interface', function(){
            gameModelMock.expects('togglePlayerChoice1')
                .once();
            scope.togglePlayerChoice1();
        });

        it('Check the status of togglePlayerChoice1 in the controller, function should only be called once upon execution, resulting in interaction between script and user interface', function(){
            gameModelMock.expects('togglePlayerChoice2')
                .once();
            scope.togglePlayerChoice2();
        });

        it('Check the functionality of the newGame controller, the audioSprite should execute upon newGame function call', function(){
            gameModelMock.expects('newGame')
                .once();
            audioSpriteMock.expects('newGame')
                .once();
            audioServiceMock.expects('newGame')
                .once();
            scope.newGame();
        });

        it('Check the functionality of the makeMove controller, the audioSprite should be called upon makeMove function call', function(){
           gameModelMock.expects('makeMove')
               .once();
            audioSpriteMock.expects('makeMove')
                .once();
            audioServiceMock.expects('makeMove')
                .once();
            scope.makeMove();
        });

        afterEach(function(){
            scope.$digest();
            gameModelMock.verify();
            sandbox.restore();
        });

    })
}());
