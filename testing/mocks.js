var mocks = {

    gameApiProxyConstants: {
        newGameUrl : 'fake new game url',
        makeMoveUrl : 'fake make move url',
        method: 'post',
        withCredentials: 'false',
        contentType: 'plain/text',

    },



    gameModelConstant: {
        currentGameState : 'gameboard',
        gameOutcome : 'gameOutcome',
        gameWinner : '0',
        chosenSquare : 'squareNumber',
        player1 : 'player1',
        player2 : 'player2',
        withCredentials : 'true',
        playerNumber : 'playerNumber',
        method : 'post',
        data: 'data',
        url: 'url',
        currentPlayer : '1',
        winningState : '',
        togglePlayer1 : 'togglePlayer1',
        togglePlayer2 : 'togglePlayer2'

    },


    gameApiProxyMock : {getResult : function(){ }},

    viewModel: {


        serverCall: function(){},
        newGame: function(){},
        makeMove: function(){},
        isNewGame: function(){},
        cyclePlayerChoice: function(){},
        swapCurrentPlayer: function(){},
        setStartingPlayer: function(){},
        updateGameBoardUI: function(){},
        togglePlayerChoice1: function(){},
        togglePlayerChoice2: function(){},
        updateWinningState: function(){},
        getLastPlayedBoard: function(){},

    }

};


