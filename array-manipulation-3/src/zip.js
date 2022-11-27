/* exported zip */
/* create an empty array for your final array. create an empty array to find the shorest
make a conditional that checks if first is shorter than second and if so make it the shortest array,
otherwise make second the shortest. Then loop over the shortest array. create an empty array to push your pairs into
push the same indexes from both arrays into your pair array, and then push that into your finalarray you createda at the
beginning and return that from the function */

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
