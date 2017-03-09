const MAX_NUMBER_OF_MOVES = 9;

class Game {
  constructor (players){
    this.players = players
    this.numberOfMoves = MAX_NUMBER_OF_MOVES;
    this.board = new Board();
  }

  getRandomStartingTurn (player){
    if (player === undefined) {
      this.turn = this.players[Math.floor(Math.random() * this.players.length)];
    }
    else {
      this.turn = player;
    }
    return this.turn;
  }

  getNextTurn(){
    this.turn === this.players[0] ? (this.turn = this.players[1]) : (this.turn = this.players[0]);
    return this.turn;
  }

}
