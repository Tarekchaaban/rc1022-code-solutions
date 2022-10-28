/* exported dropRight */
function dropRight(array, count) {
  var emptyArray = [];
  var remainingArray = [];
  if (array.length === 0) {
    return emptyArray;
  }
  for (var i = 0; i < array.length - count; i++) {
    remainingArray.push(array[i]);
  }
  return remainingArray;
}
