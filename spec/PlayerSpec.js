describe('player', function(){
  it('should have a name', function(){
    const player1 = new Player('X');
    expect(player1.name).toEqual('X');
  });
});
