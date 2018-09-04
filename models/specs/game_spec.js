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
let category1;
let category2;
let category3;
let category4;
let game;

beforeEach( function () {
  category1 = new Category(6, 9, 7);
  category2 = new Category(7, 10, 5);
  category3 = new Category(8, 6, 9);
  card1 = new Card("Superman", category1);
  card2 = new Card("Scarlet Witch", category2);
  card3 = new Card("Black Widow", category3);
  player1 = new Player("Sharon", []);
  player2 = new Player("Amy", []);
  const players = [player1, player2];
  const cards = [card1, card2, card3, card4];
  game = new Game(players, cards)
});

describe("Game", function () {

  it("should have players");

  it("should have cards");

  it("should deal cards");

  it("should play turn");
  
});
