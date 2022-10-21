/* exported reverse */
/* create an empty array called reverseArray, create a for loop to iterate through
the contents of the area backward, and push each index to the empty array through each iteration.
return the reverseArray after the iterations are complete. */

function reverse(array) {
  var reverseArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reverseArray.push(array[i]);
  }
  return reverseArray;
}
