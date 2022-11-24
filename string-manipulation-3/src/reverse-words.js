/* exported reverseWords */
/* split string into an array, then loop over those words in the array. make another
loop that loops over a single word backwards and pushes it into a reversed word variable. */
function reverseWords(string) {
  var splitWordArray = string.split(' ');
  var splitWordArraySingleWordReversed = '';
  for (var i = 0; i < splitWordArray.length; i++) {
    if (i !== 0) {
      splitWordArraySingleWordReversed += ' ';
    }
    for (var j = splitWordArray[i].length - 1; j >= 0; j--) {
      splitWordArraySingleWordReversed += splitWordArray[i][j];
    }
  }
  return splitWordArraySingleWordReversed;
}
