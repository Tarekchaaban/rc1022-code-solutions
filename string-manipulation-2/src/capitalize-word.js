/* exported capitalizeWord */
/* make the argument all lowercase and check if the word is strictly equal to javascript,
if so return JavaScript. otherwise return the firstindex as capitalized and concatenate that
with the string sliced from the first index onwards, and lowercase that. */
function capitalizeWord(word) {
  var lowerCaseWord = word.toLowerCase();
  if (lowerCaseWord === 'javascript') {
    return 'JavaScript';
  } else {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }
}
