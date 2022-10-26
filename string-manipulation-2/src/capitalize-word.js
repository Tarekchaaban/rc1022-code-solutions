/* exported capitalizeWord */
function capitalizeWord(word) {
  var lowerCaseWord = word.toLowerCase();
  if (lowerCaseWord === 'javascript') {
    return 'JavaScript';
  } else {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }
}
