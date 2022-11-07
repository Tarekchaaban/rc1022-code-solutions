/* exported includes */
/* first do the conditional to check if the array is empty, if so return false.then use the indexOf method
on the area to check if the index is present. if the index is present the return will not equal zero - therefore return true.
else return false, meaning anything that does return -1, because the value is not an indexof the array. */

function includes(array, value) {
  if (array.length === 0) {
    return false;
  } else if (array.indexOf(value) !== -1) {
    return true;
  } else {
    return false;
  }
}
