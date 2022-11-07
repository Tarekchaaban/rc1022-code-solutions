/* exported pick */
/* create an empty object. and create afor loop to iterate through all keys in source object.
create a conditioanl to check if the keys array .includes the key from source you're iterating through,
and also check if the source[key] is not undefined. if it passes both tests, make that key-value pair a pair
on your new empty object as well */
function pick(source, keys) {
  var newObject = {};
  for (var key in source) {
    if (keys.includes(key) && source[key] !== undefined) {
      newObject[key] = source[key];
    }
  }
  return newObject;
}
