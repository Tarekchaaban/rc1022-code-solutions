/* exported isLowerCased */
/* create a for loop to go through each letter in the word. Then create a conditional statement to return false if a letter is not lowercase.
if none return false, then exit the conditional and return true to indicate that they were all lowercase */

function isLowerCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toLowerCase()) {
      return false;
    }
  }
  return true;
}
