/* exported difference */
function difference(first, second) {
  var differenceArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) === -1) {
      differenceArray.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (first.indexOf(second[j]) === -1) {
      differenceArray.push(second[j]);
    }
  }
  return differenceArray;
}
