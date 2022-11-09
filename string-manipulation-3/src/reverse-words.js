/* exported reverseWords */
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

/*
another way to do it by using an empty array to push the reversed strings into,
but the string is initiated within the outer for loop so it resets after each single
word in the array is reversed.

function reverseWords(string) {
  var splitWordArray = string.split(' ');
  var splitWordArrayReversed = [];
  for (var i = 0; i < splitWordArray.length; i++) {
    var splitWordArraySingleWordReversed = '';
    for (var j = splitWordArray[i].length - 1; j >= 0; j--) {
      splitWordArraySingleWordReversed += splitWordArray[i][j];
    }
    splitWordArrayReversed.push(splitWordArraySingleWordReversed);
  }
  return splitWordArrayReversed.join(' ');
} */
