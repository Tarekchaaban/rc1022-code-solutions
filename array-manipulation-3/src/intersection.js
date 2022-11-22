/* exported intersection */
function intersection(first, second) {
  var intersectionArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) !== -1) {
      intersectionArray.push(first[i]);
    }
  }
  return intersectionArray;
}
