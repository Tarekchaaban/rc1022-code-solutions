/* exported isAnagram */
/* first split the string into an array, then use the .sort method to sort the arrays values. rejoin the arrays and
check to see if they are the same value */
function isAnagram(firstString, secondString) {
  var firstStringSorted = firstString.split('').sort().join('');
  var secondStringSorted = secondString.split('').sort().join('');
  var firstStringSortedNoSpace = '';
  var secondStringSortedNoSpace = '';
  for (var i = 0; i < firstStringSorted.length; i++) {
    if (firstStringSorted[i] !== ' ') {
      firstStringSortedNoSpace += firstStringSorted[i];
    }
  }
  for (var j = 0; j < secondStringSorted.length; j++) {
    if (secondStringSorted[j] !== ' ') {
      secondStringSortedNoSpace += secondStringSorted[j];
    }
  }
  if (firstStringSortedNoSpace === secondStringSortedNoSpace) {
    return true;
  } else {
    return false;
  }
}
