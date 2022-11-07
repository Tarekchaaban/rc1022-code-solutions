/* exported invert */
/* create empty object. make a for in loop to iterate through keys in source object.
make the newObject[source[key]] set equal to just key. */
function invert(source) {
  var newObject = {};
  for (var key in source) {
    newObject[source[key]] = key;
  }
  return newObject;
}
