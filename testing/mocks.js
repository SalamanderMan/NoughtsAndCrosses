var mocks = {

    gameApiProxyConstants: {
        newGameUrl : 'fake new game url',
        makeMoveUrl : 'fake make move url',
        method: 'post',
        withCredentials: 'false',
        contentType: 'plain/text'
    },

    gameModelConstants: {
        initialGameState : '000000000',
        initialGameOutcome : 'continue',
        defaultGameWinner : '0',
        defaultPlayer : '1',
        defaultPlayer1Type : 'random',
        defaultPlayer2Type : 'human'
    },

    gameModelMock: {
        newGame: function(){},
        makeMove: function(){},
        setStartingPlayer: function(){},
        updateGameBoardUI: function(){},
        togglePlayerChoice1: function(){},
        togglePlayerChoice2: function(){},
        audioSprite: function(){},
        audioService: function(){}
    },

    audioSpriteMock : {
        newGame: function (){},
        makeMove: function(){}
    },

    audioServiceMock : {
        newGame: function (){},
        makeMove: function(){}
    },

    directiveMocks : {
        playerNumberToGamePiece : function(){},
        makeMove : function(){}
    },

    newGameAudioMocks : {
        startTime : '2.5'
    },


    filterMock : function (value) {return value; }

};


