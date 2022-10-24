/* exported getKeys */
/* create an empty array, use a for in loop to iterate through the key value pairs in the object,
push only the key into the array. return the array. */
function getKeys(object) {
  var keyArray = [];
  for (var key in object) {
    keyArray.push(key);
  }
  return keyArray;
}
