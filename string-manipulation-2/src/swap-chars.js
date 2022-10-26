/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var temp = string[firstIndex];
  string[firstIndex] = string[secondIndex];
  string[secondIndex] = temp;
  return string;
}
