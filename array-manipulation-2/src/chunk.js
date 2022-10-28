/* exported chunk */
function chunk(array, size) {
  var outerArray = [];
  for (var i = 0; i < array.length; i += size) {
    outerArray.push(array.slice(i, i + size));
  }
  return outerArray;
}
