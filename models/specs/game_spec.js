const assert = require('assert');
const Card = require('../card.js');
const Category = require('../category.js');
const Player = require('../player.js');
const Game = require('../game.js')

let player1;
let player2;
let card1;
let card2;
let card3;
let card4;
let card5;
let card6;
let category1;
let category2;
let category3;
let category4;
let category5;
let category6;
let game;

beforeEach( function () {
  category1 = new Category(6, 9, 7);
  category2 = new Category(7, 10, 5);
  category3 = new Category(8, 6, 9);
  category4 = new Category(7, 4, 10);
  category5 = new Category(8, 7, 5);
  category6 = new Category(10, 5, 6)
  card1 = new Card("Superman", category1);
  card2 = new Card("Scarlet Witch", category2);
  card3 = new Card("Black Widow", category3);
  card4 = new Card("The Flash", category4);
  card5 = new Card("Wonder Woman", category5);
  card6 = new Card("Batman", category6)
  player1 = new Player("Sharon", []);
  player2 = new Player("Amy", []);
  const players = [player1, player2];
  const cards = [card1, card2, card3, card4, card5, card6];
  game = new Game(players, cards)
});

describe("Game", function () {

  it("should have players", function () {
    const actual = game.players;
    assert.deepStrictEqual(actual, [player1, player2]);
  });

  it("should have cards", function () {
    const actual = game.cards;
    assert.deepStrictEqual(actual, [card1, card2, card3, card4, card5, card6]);
  });

  it("should deal cards -- player1", function () {
    game.dealCards();
    const actual = player1.handOfCards;
    assert.deepStrictEqual(actual, [card1, card3, card5]);
  });

  it("should deal cards -- player2", function () {
    game.dealCards();
    const actual = player2.handOfCards;
    assert.deepStrictEqual(actual, [card2, card4, card6]);
  });

  it("should play turn", function () {
    game.dealCards();
    const actual = game.playTurn(player1, player2);
    assert.strictEqual(actual, "The winner is Amy")
  });

});
