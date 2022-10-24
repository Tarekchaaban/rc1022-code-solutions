/* exported reverseWord */

/* create an empty string for wordReversed. Create a forloop that starts from the end of the word (word.length) and incremenets down to 0.
add word[i] during every increment to the wordReversed variable and reassign it. Finally return the wordReversed variable after the for loop. */

function reverseWord(word) {
  var wordReversed = '';
  for (var i = word.length - 1; i >= 0; i--) {
    wordReversed += word[i];
  }
  return wordReversed;
}
