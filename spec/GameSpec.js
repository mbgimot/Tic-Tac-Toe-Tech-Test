describe('Game', function(){

  const player1 = new Player('Player1', 'X');
  const player2 = new Player('Player2', 'O');
  const game = new Game([player1, player2]);

  it('Should have two players', function(){
    expect(game.players[0].name).toEqual('Player1');
    expect(game.players[1].name).toEqual('Player2');
  });

  describe('NumberofMoves', function(){
    it('Should initialize with 9 moves', function(){
      expect(game.numberOfMoves).toEqual(MAX_NUMBER_OF_MOVES);
    });

    it('Should decrease on each turn', function(){
      game.playTurn(0);
      expect(game.numberOfMoves).toEqual(MAX_NUMBER_OF_MOVES-1);
    });
  });

  describe('Turn', function(){
    it('Should randomly decide who starts playing', function(){
      spyOn(game, 'getRandomStartingTurn').and.returnValue(player1.type);
      expect(game.getRandomStartingTurn()).toEqual('X');
    });

    it('Should alternate players on each turn', function(){
      game.turn = 'X';
      expect(game.getNextTurn()).toEqual('O');
    });
  });

  describe('checkMove', function(){
    it('should register each move in the field', function(){
      game.getRandomStartingTurn();
      game.checkMove(0);
      expect(game.board.field[0]).toBe(game.turn);
    });
  });


});
