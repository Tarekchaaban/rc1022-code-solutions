/* exported capitalize */
/* Capitalize the first letter of the string, so capitalize at index 0
split the word into two strings so that you can lowercase the secondhalf. combine both */

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
