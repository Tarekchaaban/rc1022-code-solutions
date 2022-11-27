/* exported difference */
/* create an empty array called differenceArray and make two for loops to loop over
both arrays provided. Check to see if any of the items from the first array exist in the second,
and if they dont, push it into your created array. Do the exact opposite with the second array and push
the result of that into the same original array. */
function difference(first, second) {
  var differenceArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) === -1) {
      differenceArray.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (first.indexOf(second[j]) === -1) {
      differenceArray.push(second[j]);
    }
  }
  return differenceArray;
}
