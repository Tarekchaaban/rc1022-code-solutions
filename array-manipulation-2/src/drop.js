/* exported drop */
/* create an empty array for the empty array test you need to return, as well as the others.
for the empty array, create a conditional to check if the array passed through is empty, and if so return empty array.
for the others make a else statement with a for loop that starts at count and goes until less than the array.length, and push those into your other array.
return that array after the for loop */
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
