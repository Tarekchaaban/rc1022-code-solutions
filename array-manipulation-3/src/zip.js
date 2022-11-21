/* exported zip */
function zip(first, second) {
  var finalArray = [];
  for (var i = 0; i < first.length; i++) {
    if (first.length > second.length) {
      first.pop();
    }
    var pairArray = [];
    pairArray.push(first[i]);
    pairArray.push(second[i]);
    finalArray.push(pairArray);
  }

  return finalArray;
}
