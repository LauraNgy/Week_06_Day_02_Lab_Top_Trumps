const Player = function (name, handOfCards) {
  this.name = name;
  this.handOfCards = handOfCards;
};

Player.prototype.playCard = function () {
  return this.handOfCards.shift();
};

Player.prototype.selectCategory = function (card) {
    let highestValue = 0;
    let pickedCat = "strength";
    for (let value in card) {
      if (card.value >= highestValue){
        pickedCat = value;
      }
    }
    return pickedCat;
};

module.exports = Player;
