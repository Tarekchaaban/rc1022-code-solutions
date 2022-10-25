/* exported truncate */
function truncate(length, string) {
  var shortenedString = string.substring(0, length);
  shortenedString += '...';
  return shortenedString;
}
