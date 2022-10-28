/* exported includes */
function includes(array, value) {
  if (array.length === 0) {
    return false;
  } else if (array.indexOf(value) !== -1) {
    return true;
  } else {
    return false;
  }
}
