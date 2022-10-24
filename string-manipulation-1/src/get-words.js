/* exported getWords */
/* Split the string in the argument using the .Split method and return the function. */

function getWords(string) {
  if (string === '') {
    var emptyArray = string.split('');
    return emptyArray;
  } else {
    var splitWords = string.split(' ');
    return splitWords;
  }
}
