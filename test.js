class Deck {
  constructor() {
    this.cards = [];
  }

  createDeck() {
    let suits = ["spades", "diamonds", "clubs", "hearts"];
    let ranks = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ];
    let vals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    for (let suit of suits) {
      for (let j = 0; j < ranks.length; j++) {
        this.cards.push(new Card(suit, ranks[j], vals[j]));
      }
    }
  }

  shuffleDeck() {
    for (let i = 0; i < 1000; i++) {
      let location1 = Math.floor(Math.random() * this.cards.length);
      let location2 = Math.floor(Math.random() * this.cards.length);
      [this.cards[location1], this.cards[location2]] = [
        this.cards[location2],
        this.cards[location1],
      ];
    }
  }
}

class Card {
  constructor(suit, rank, value) {
    this.suit = suit;
    this.value = value;
    this.rank = rank;
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
  }

  drawCard(deck) {
    this.hand.push(deck.cards.pop());
  }

  arrangeHand() {
    this.hand.sort((a, b) => {
      let suitCompare = a.suit.localeCompare(b.suit);
      let valCompare = a.value - b.value;

      return suitCompare || valCompare;
    });
  }
}

class Board {
  constructor() {
    this.board = [];
  }
}

function generateRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// let deck = new Deck();
// deck.createDeck();
// deck.shuffleDeck();
// let Dan = new Player("Dan");
// Dan.drawCard(deck);
// Dan.drawCard(deck);
// Dan.drawCard(deck);
// Dan.drawCard(deck);
// Dan.drawCard(deck);
// Dan.drawCard(deck);
// Dan.drawCard(deck);
// Dan.arrangeHand();
// console.log(deck.cards.length);
// console.log(Dan.hand);
// console.log(generateRandomNumber(1, 10));
// console.log(generateRandomNumber(1, 10));
// console.log(generateRandomNumber(1, 10));
// console.log(generateRandomNumber(1, 10));
// console.log(generateRandomNumber(1, 10));
// console.log(generateRandomNumber(1, 10));
// console.log(generateRandomNumber(1, 10));
// console.log(generateRandomNumber(1, 10));
// console.log(generateRandomNumber(1, 10));
// console.log(generateRandomNumber(1, 10));

class VendingMachine {
  constructor() {
    this.stock = new Map();
    this.change = 0;
    this.capacity = 100;
  }

  stockUp(item, freq) {
    if (this.stock.has(item)) {
      let currentStock = this.stock.get(item);
      this.stock.set(item, currentStock + freq);
    } else {
      this.stock.set(item, freq);
    }

    this.capacity -= freq;
  }

  vend(item, change) {
    if (change > item.price) {
      this.change += change;
      this.change -= item.price;
    } else {
      this.change += item.price;
    }
    this.capacity += 1;
    if (this.stock.has(item)) {
      let currentStock = this.stock.get(item);
      this.stock.set(item, currentStock - 1);
    } else {
      console.log("Item not in stock");
    }
  }
}

class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

let coke = new Item("coke", 5);
let sprite = new Item("sprite", 5);
let granola = new Item("granola", 5);

let vending = new VendingMachine();
vending.stockUp(coke, 10);
vending.stockUp(sprite, 20);
vending.stockUp(granola, 30);
vending.vend(coke, 10);
vending.vend(coke, 30);

console.log(vending);

function getMinStep(n) {
  let arr = new Array(n + 1);

  arr[1] = 0;

  for (let i = 1; i < arr.length; i++) {
    table[i + 1] = Math.min(table[i + 1], table[i] + 1);
    table[i * 2] = Math.min(table[i * 2], table[i] + 1);
    table[i * 3] = Math.min(table[i * 3], table[i] + 1);
  }
}
return table[n];
