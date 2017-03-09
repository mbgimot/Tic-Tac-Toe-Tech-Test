describe('Game', function(){

  const player1 = new Player('Player1');
  const player2 = new Player('Player2');
  const game = new Game(player1, player2);

  it('Should have two players', function(){
    expect(game.player1.name).toEqual('Player1');
    expect(game.player2.name).toEqual('Player2');
  });
});
