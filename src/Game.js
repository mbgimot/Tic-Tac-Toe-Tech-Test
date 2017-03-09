const MAX_NUMBER_OF_MOVES = 9;

class Game {
  constructor (players){
    this.players = players
  }

  getRandomStartingTurn (){
    this.turn = this.players[Math.floor(Math.random() * this.players.length)];
    return this.turn
  }

  getNextTurn(){

  }

}
