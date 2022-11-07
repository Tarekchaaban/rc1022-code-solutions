/* exported numVowels */
/* start by making the string input all lowercase to avoid capitalization issues, then create a variable
for the counter to count the amount of vowels in the string. put it through a for loop with a condition to check if the string
at a specific index is equal to any of the vowel strings. if so increment the counter and return it after the loop is done. */
function numVowels(string) {
  var lowerCaseString = string.toLowerCase();
  var counter = 0;
  for (var i = 0; i < lowerCaseString.length; i++) {
    if (lowerCaseString[i] === 'a' || lowerCaseString[i] === 'e' || lowerCaseString[i] === 'i' || lowerCaseString[i] === 'o' || lowerCaseString[i] === 'u') {
      counter++;
    }
  }
  return counter;
}
