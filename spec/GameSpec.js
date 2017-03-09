describe('Game', function(){

  const player1 = new Player('Player1');
  const player2 = new Player('Player2');
  const game = new Game([player1, player2]);

  beforeEach(function(){
    spyOn(game, 'getRandomStartingTurn').and.returnValue(player1)
  });

  it('Should have two players', function(){
    expect(game.players[0].name).toEqual('Player1');
    expect(game.players[1].name).toEqual('Player2');
  });

  it('Should randomly decide who starts playing', function(){
    expect(game.getRandomStartingTurn()).toEqual(player1);
  });

  it('Should alternate players on each turn', function(){
    expect(game.getNextTurn()).toEqual(player2);
  });
});
