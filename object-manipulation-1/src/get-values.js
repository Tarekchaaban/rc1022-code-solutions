/* exported getValues */
/* create an empty array, and create a for in loop to loop through the pairs
in the object. push the object @ key values into your new array. return array. */
function getValues(object) {
  var valuesArray = [];
  for (var key in object) {
    valuesArray.push(object[key]);
  }
  return valuesArray;
}
