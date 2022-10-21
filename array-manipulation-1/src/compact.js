/* exported compact */
function compact(array) {
  var truthyArray = [];

  for (var i = 0; i < array.length; i++) {
    if (Boolean(array[i]) === true) {
      truthyArray.push(array[i]);
    }
  }
  return truthyArray;
}
