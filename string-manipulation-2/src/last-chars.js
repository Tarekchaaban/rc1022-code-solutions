/* exported lastChars */
/* utlize the substring method, but since you need it from a certain index to the end of the word, use only 1 argument. */

function lastChars(length, string) {
  return string.substring(string.length - length);
}
