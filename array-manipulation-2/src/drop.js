/* exported drop */
function drop(array, count) {
  var countArray = [];
  var emptyArray = [];
  if (array.length === 0) {
    return emptyArray;
  } else {
    for (var i = count; i < array.length; i++) {
      countArray.push(array[i]);
    }
  }
  return countArray;

}
