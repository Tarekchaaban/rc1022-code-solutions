/* exported take */
/* create an empty array for the empty array test you need to return, as well as the others.
for the empty array, create a conditional to check if the array passed through is empty, and if so return empty array.
for the others make a else statement with a for loop that starts at 0 and goes until less than the count number, and push those into your other array.
return that array after the foor loop */
function take(array, count) {
  var countArray = [];
  var emptyArray = [];
  if (array.length === 0) {
    return emptyArray;
  } else {
    for (var i = 0; i < count; i++) {
      countArray.push(array[i]);
    }
  }
  return countArray;

}
