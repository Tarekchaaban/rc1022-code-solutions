/* exported omit */
/* the exact opposite as pick, just need to chekc if key from source doesn't exist in the keys array. Still check for
undefined the same way. */
function omit(source, keys) {
  var newObject = {};
  for (var key in source) {
    if (!keys.includes(key) && source[key] !== undefined) {
      newObject[key] = source[key];
    }
  }
  return newObject;
}
