/* exported tail */
/*
create an empty array called missingFirstIndex
use a for loop to iterate through the indexes in the array, but start with
index 1, instead of 0 in order to omit the first item. return the missingFirstIndex array. */

function tail(array) {
  var missingFirstIndex = [];
  for (var i = 1; i < array.length; i++) {
    missingFirstIndex.push(array[i]);
  }
  return missingFirstIndex;
}
