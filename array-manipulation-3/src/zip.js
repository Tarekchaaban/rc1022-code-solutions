/* exported zip */
function zip(first, second) {
  for (var i = 0; i < first.length; i++) {
    var pairArray = [];
    pairArray.push(first[i]);
    pairArray.push(second[i]);
    var combinedArray = [].concat(pairArray);
  }
  var finalArray = [].concat(combinedArray);
  return finalArray;
}
