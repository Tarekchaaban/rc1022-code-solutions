/* exported isPalindromic */
function isPalindromic(string) {
  var reverseString = '';
  var compareString = '';
  for (var i = string.length - 1; i >= 0; i--) {
    if (string[i] !== ' ') {
      reverseString += string[i];
    }
  }
  for (var j = 0; j < string.length; j++) {
    if (string[j] !== ' ') {
      compareString += string[j];
    }
  }
  if (reverseString === compareString) {
    return true;
  } else {
    return false;
  }
}
/* Doesn't pass the tests that have a space in it, not sure why, but went with
another way of doing it.
function isPalindromic(string) {
  var arrayValues = string.split('');
  var reverseArrayValues = arrayValues.reverse();
  var reverseString = reverseArrayValues.join('');
  if (string === reverseString) {
    return true;
  } else {
    return false;
  }
} */
