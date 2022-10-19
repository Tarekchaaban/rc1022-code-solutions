var x = 1;
var y = 2;
var z = 3;

var maximumValue = Math.max(x, y, z);

console.log('The highest number is:', maximumValue);

var heroes = ['Superman', 'Spiderman', 'Batman', 'Wonderwoman'];

var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];

console.log('randomHero:', randomHero);

var library = [
  {
    title: 'Harry Potter',
    author: 'J.K. Rowlings'
  },
  {
    title: 'Lord of the Rings',
    author: 'IDK'
  },
  {
    title: 'Series of Unfortunate Events',
    author: 'Lemony Snicket'
  }
];

var lastBook = library.pop();

console.log('lastBook:', lastBook);

var firstBook = library.shift();

console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library:', library);

var fullName = 'Tarek Chaaban';

var firstAndLastName = fullName.split(' ');

console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();

console.log('sayMyName:', sayMyName);
