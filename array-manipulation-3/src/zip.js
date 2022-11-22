/* exported zip */
/* function zip(first, second) {
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
} */

function zip(first, second) {
  var finalArray = [];
  var shortest = [];
  if (first.length < second.length) {
    shortest = first;
  } else {
    shortest = second;
  }
  for (var i = 0; i < shortest.length; i++) {
    var pairArray = [];
    pairArray.push(first[i]);
    pairArray.push(second[i]);
    finalArray.push(pairArray);
  }

  return finalArray;
}
