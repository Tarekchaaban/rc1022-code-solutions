/* create an array of objects for each of the players with three key-value pairs,
one for name, one for a hand with an empty array, and one for points set to 0.
Make a function that creates a deck by first making an array for all the suits, and all the numbers
and running it through a loop which will create a card object which you then push into your total deck.
From there you will need a shuffle function which will essentially work in the following manner:
you target two cards in the deck every iteration of the loop and switch their postiion, but have this loop about 1000
times to ensure it's fully shuffled. Then you will need to deal cards which will be a loop that iterates only twice outside
another for loop which iterates over the players. every player will have a piece of the deck array popped off
in each iteration and added to their hand property. From there you will need to create a function that tallies the values
of the cards each player has in their hand, and finds the one with the highest point to return as the winner. */
console.log('Lodash is loaded:', typeof _ !== 'undefined');
var players = [
  {
    name: 'player_one',
    hand: [],
    points: 0
  },
  {
    name: 'player_two',
    hand: [],
    points: 0
  },
  {
    name: 'player_three',
    hand: [],
    points: 0
  },
  {
    name: 'player_four',
    hand: [],
    points: 0
  }
];

var suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
var values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
var deck = [];

function createDeck() {
  deck = [];
  for (var i = 0; i < values.length; i++) {
    for (var j = 0; j < suits.length; j++) {
      var weight = parseInt(values[i]);
      if (values[i] === 'J' || values[i] === 'Q' || values[i] === 'K') {
        weight = 10;
      }
      if (values[i] === 'A') {
        weight = 11;
      }
      var card =
      {
        Value: values[i],
        Suit: suits[j],
        Weight: weight
      };
      deck.push(card);
    }
  }
}

function shuffle() {
  for (var i = 0; i < 1000; i++) {
    var location1 = Math.floor((Math.random() * deck.length));
    var location2 = Math.floor((Math.random() * deck.length));
    var temp = deck[location1];

    deck[location1] = deck[location2];
    deck[location2] = temp;
  }
}

function dealHands() {
  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < players.length; j++) {
      var card = deck.pop();
      players[j].hand.push(card);
    }
  }
}

function updatePoints() {
  for (var j = 0; j < players.length; j++) {
    players[j].points = players[j].hand[0].Weight + players[j].hand[1].Weight;
  }
}

function logWinner() {
  var winnerNumber = 0;
  var winnerName = '';
  for (var j = 0; j < players.length; j++) {
    if (players[j].points > winnerNumber) {
      winnerNumber = players[j].points;
      winnerName = players[j].name;
    }
  }
  return winnerName + ': ' + winnerNumber + ' points';
}

createDeck();
shuffle();
dealHands();
updatePoints();
logWinner();
