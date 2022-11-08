/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var firstStringSorted = firstString.split('').sort().join('');
  var secondStringSorted = secondString.split('').sort().join('');
  if (firstStringSorted === secondStringSorted) {
    return true;
  } else {
    return false;
  }
}
