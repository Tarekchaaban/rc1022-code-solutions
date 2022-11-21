/* exported equal */
function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}

/* var firstArrayString = first.join(' ');
var secondArrayString = second.join(' ');
if (firstArrayString === secondArrayString) {
  return true;
} else {
  return false;
} */
