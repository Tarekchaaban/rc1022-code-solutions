/* exported swapChars */
/* create an empty string to push your swapped values into. create a for loop to iterate through the string.
check if i === to the firstIndex in the argument and if so push the string[secondIndex]
make another conditional for the exact opposite. and else just push the string[i]; return your swapped string. */
function swapChars(firstIndex, secondIndex, string) {
  var swappedString = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      swappedString += string[secondIndex];
    } else if (i === secondIndex) {
      swappedString += string[firstIndex];
    } else {
      swappedString += string[i];
    }
  }
  return swappedString;
}
