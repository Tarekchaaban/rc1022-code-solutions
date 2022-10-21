/* exported initial */
/* create an empty array called missingLastIndex
use a for loop to iterate through the indexes in the array, start with
index 0, however set the conditional to i < array.length - 1 in order to omit the last index.
return the missingLastIndex array. */

function initial(array) {
  var missingLastIndex = [];
  for (var i = 0; i < array.length - 1; i++) {
    missingLastIndex.push(array[i]);
  }
  return missingLastIndex;
}
