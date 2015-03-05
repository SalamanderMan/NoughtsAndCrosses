/*
(function(){
    'use strict';
    describe('Controller test', function(){
        var scope;
        var controller;
        var sandbox;

        var viewModelMock;

        beforeEach(function(){
            module('tombola.noughtsAndCrossesApp.controller');
            inject(function($injector){
                controller = $injector.get('controller', mocks.viewModel);
            });
        });

        beforeEach(inject(function($rootScope, $controller, $q){

            mocks.gameApiProxyMock.getResult = function(){
                return $q.when({gameWinner: '2', currentGameState:'222222222'});
            };

            sandbox = sinon.sandbox.create();
            viewModelMock = sinon.sandbox.mock(mocks.viewModel);

            scope = $rootScope.$new();

            controller = $controller('tombola.noughtsAndCrossesApp.controller',{
                $scope: scope,
                viewModel: mocks.viewModel,
                gameApiProxy: mocks.gameApiProxyMock
            });

        }));

        it('Check newGame calls the viewModel reset', function(){
            viewModelMock.expects('newGame').once();
            scope.newGame();
        });

        it('Check makeMove calls the viewModel update', function(){
            viewModelMock.expects('makeMove').once();
            scope.makeMove();
        });

        afterEach(function(){
            scope.$digest();
            viewModelMock.verify();
            sandbox.restore();
        });

    })
});*/
