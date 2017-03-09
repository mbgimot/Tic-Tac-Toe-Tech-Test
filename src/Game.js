const MAX_NUMBER_OF_MOVES = 9;

class Game {
  constructor (players){
    this.players = players;
    this.numberOfMoves = MAX_NUMBER_OF_MOVES;
    this.board = new Board();
  }

  playTurn(id){
    this.numberOfMoves -= 1;
    this.checkMove(id);
    this.getNextTurn();
  }

  checkMove(id) {
    this.board.field[id] = this.turn;
  }

  getRandomStartingTurn (){
    this.turn = (this.players[Math.floor(Math.random() * this.players.length)]).type;
    return this.turn;
  }

  getNextTurn(){
    this.turn === this.players[0].type ? (this.turn = this.players[1].type) : (this.turn = this.players[0].type);
    return this.turn;
  }

}
