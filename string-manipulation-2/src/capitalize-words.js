/* exported capitalizeWords */
/* start off by splitting your string into an array and assign that to a variable, and creating an empty array.
from there loop through the array and do the same thing as capitalizedWord function.
push all the capitalized values into your empty array and return it. */
function capitalizeWords(string) {
  var separatedWords = string.split(' ');
  var capitalizedWordArray = [];
  for (var i = 0; i < separatedWords.length; i++) {
    var capitalizedWord = separatedWords[i][0].toUpperCase() + separatedWords[i].slice(1).toLowerCase();
    capitalizedWordArray.push(capitalizedWord);
    var capitalizedWordString = capitalizedWordArray.join(' ');
  }
  return capitalizedWordString;
}
