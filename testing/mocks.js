var mocks = {

    gameApiProxyConstants: {
        newGameUrl : 'fake new game url',
        makeMoveUrl : 'fake make move url',
        method: 'post',
        withCredentials: 'false',
        contentType: 'plain/text',

    },



    gameModelConstants: {
        initialGameState : '000000000',
        initialGameOutcome : 'continue',
        defaultGameWinner : '0',
        defaultPlayer : '1',
        defaultPlayer1Type : 'random',
        defaultPlayer2Type : 'human'
    },


    gameApiProxyMock : {getResult : function(){ }},

    gameModelMock: {


        serverCall: function(){},
        newGame: function(){},
        makeMove: function(){},
        isNewGame: function(){},
        cyclePlayerChoice: function(){},
       // swapCurrentPlayer: function(){},
        setStartingPlayer: function(){},
        updateGameBoardUI: function(){},
        togglePlayerChoice1: function(){},
        togglePlayerChoice2: function(){},
        updateWinningState: function(){},
        getLastPlayedBoard: function(){},
        audioSprite: function(){},

    },

    audioSpriteMock : {

        newGame: function (){},
        makeMove: function(){},

    },

};


