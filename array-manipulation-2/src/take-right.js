/* exported takeRight */
/* create an array and assign it to the value of your full array, that way you can return that
if the count is larger than the arrays length. otherwise create a for loop to go through your array
and set the initaliazation at array.length - count you 'count' amount of letters from the end. push that into your other array
and return it */
function takeRight(array, count) {
  var fullArray = array;
  var rightArray = [];
  if (count > array.length) {
    return fullArray;
  } else {
    for (var i = array.length - count; i < array.length; i++) {
      rightArray.push(array[i]);
    }
  }
  return rightArray;
}
