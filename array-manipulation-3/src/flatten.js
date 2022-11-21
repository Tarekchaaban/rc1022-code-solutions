/* exported flatten */
function flatten(array) {
  var flatArray = [].concat(...array);
  return flatArray;
}
