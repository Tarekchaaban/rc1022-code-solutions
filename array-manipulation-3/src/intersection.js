/* exported intersection */
/* create an empty array. loop over the first array and check to see if any of the indexes within the first array
exist in the second. if they do, push them into the empty array you created. */
function intersection(first, second) {
  var intersectionArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) !== -1) {
      intersectionArray.push(first[i]);
    }
  }
  return intersectionArray;
}
