/* exported equal */
/* first check if the length of the two arrays is the same, if not return false.
then check that each index is the exact same, if not return false. */
function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
