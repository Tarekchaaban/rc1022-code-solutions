/* exported toObject */
/* create an empty object, then create a new keyvaluepair by accessing the array at 0
to get the key, and index 1 to get the value. Then use bracket notation to assign the key value pair to the object. */
function toObject(keyValuePair) {
  var newObject = {};
  newObject[keyValuePair[0]] = keyValuePair[1];
  return newObject;
}
