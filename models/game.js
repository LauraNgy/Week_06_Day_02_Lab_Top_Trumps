const Game = function (players, cards) {
  this.players = players;
  this.cards = cards;
};

Game.prototype.dealCards = function () {
  for (let i = 0; i < this.cards.length; i++){
    if (i % 2 === 0) {
      this.players[0].handOfCards.push(this.cards[i]);
    }
    else this.players[1].handOfCards.push(this.cards[i]);
  }
};

Game.prototype.playTurn = function (player1, player2) {
  let winner = player1.name;
  const card1 = player1.playCard();
  const card2 = player2.playCard();
  const turnCat = player1.selectCategory(card1);
  if (card1.category[turnCat] < card2.category[turnCat]) {
    winner = player2.name;
  }
  return `The winner is ${winner}`
};

module.exports = Game;
