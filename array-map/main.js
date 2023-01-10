const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubled = numbers.map(number => number * 2);
console.log(doubled);

function pricesFunction(number) {
  const decimalNumber = number.toFixed(2);
  const finalNumber = `$${decimalNumber}`;
  return finalNumber;
}
const prices = numbers.map(pricesFunction);
console.log(prices);

const upperCased = languages.map(language => language.toUpperCase());
console.log(upperCased);

function firstLettersFunction(language) {
  const firstLetter = language[0];
  return firstLetter;
}

const firstLetters = languages.map(firstLettersFunction);
console.log(firstLetters);
