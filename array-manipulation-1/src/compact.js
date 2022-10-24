/* exported compact */
/* create an empty array to push your truthy values into. create a for loop to loop through the
the entire array from beginning to end. Make a condition to check whether or not the index going through the iteration is truthy.
if so, push that value into the array. return the array once the iterations are complete */
function compact(array) {
  var truthyArray = [];

  for (var i = 0; i < array.length; i++) {
    if (Boolean(array[i]) === true) {
      truthyArray.push(array[i]);
    }
  }
  return truthyArray;
}
