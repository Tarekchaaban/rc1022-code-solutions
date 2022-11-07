/* exported truncate */
/* use substring to grab the portion of the string from the first index up to the length specified and store that into a variable.
concatenate the variable with an ellipses and return it. */
function truncate(length, string) {
  var shortenedString = string.substring(0, length);
  shortenedString += '...';
  return shortenedString;
}
