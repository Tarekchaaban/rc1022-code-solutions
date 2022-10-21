/* exported isUpperCased */
/* create a for loop to go through each letter in the word. Then create a conditional statement to return false if a letter is not capitalized.
if none return false, then exit the conditional and return true to indicate that they all were capitalized */

function isUpperCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toUpperCase()) {
      return false;
    }
  }
  return true;
}
