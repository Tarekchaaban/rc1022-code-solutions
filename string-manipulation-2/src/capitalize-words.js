/* exported capitalizeWords */
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
