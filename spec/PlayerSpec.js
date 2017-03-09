describe('Player', function(){

  const player1 = new Player('Player1');

  it('should have a name', function(){
    expect(player1.name).toEqual('Player1');
  });
  it('should have a type', function(){
    player1.setXO('X')
    expect(player1.type).toEqual('X');
  });
});
