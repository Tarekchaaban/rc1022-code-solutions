/* exported union */
function union(first, second) {
  var unionArray = [];
  for (var i = 0; i < first.length; i++) {
    if (unionArray.indexOf(first[i]) === -1) {
      unionArray.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (unionArray.indexOf(second[j]) === -1) {
      unionArray.push(second[j]);
    }
  }
  return unionArray;
}
