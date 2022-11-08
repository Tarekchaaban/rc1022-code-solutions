/* exported isPalindromic */
function isPalindromic(string) {
  var arrayValues = string.split('');
  var reverseArrayValues = arrayValues.reverse();
  var reverseString = reverseArrayValues.join('');
  if (string === reverseString) {
    return true;
  } else {
    return false;
  }
}
