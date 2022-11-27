/* exported union */
/* create an empty array. loop over the first array given in the argument, and check whether or not that
your array you created has any of those indexes you're looping over. if not, push them into your empty array.
do the same thing for the second array provided in the argument. return your array you created. */
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
