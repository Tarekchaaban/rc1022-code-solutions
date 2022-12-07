/* exported flatten */
/* use the spread operator to flatten the given array by one level, then use the concat method
on an empty array and pass the array with the spread operator as an argument and assign the result
of all that to a variable which you will return from the function */
function flatten(array) {
  var flatArray = [].concat(...array);
  return flatArray;
}
