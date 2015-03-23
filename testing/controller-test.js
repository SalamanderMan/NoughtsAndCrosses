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

        /*it('Check the functionality of the makeMove controller, audioSprite should execute upon execution of makeMove function', function(){
            gameModelMock.expects('newGame');
            audioSpriteMock.expects('newGame')
                .once();
            scope.newGame();
        });
*/
        afterEach(function(){
            scope.$digest();
            gameModelMock.verify();
            sandbox.restore();
        });

    })
}());
