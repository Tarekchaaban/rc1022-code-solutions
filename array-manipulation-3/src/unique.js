/* exported unique */
/* create an empty array. loop over the array in provided in the argument, and check
if your array you created has any of the indexes in the array you're looping over. if not push them into
the array you created and return it from the function. */
function unique(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (newArray.indexOf(array[i]) === -1) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
