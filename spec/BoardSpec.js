describe('Board', function(){
  const board = new Board();

  it('Should have nine undefined spaces', function(){
    expect(board.field).toEqual([undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined])
  });

});
