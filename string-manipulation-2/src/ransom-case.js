/* exported ransomCase */
/* create an empty string to concatenate your ransomcase string items into. create a for loop that iterates through the string
and checks to see if the iteration is on an odd or even index. if i % 2 = 0 meaning its even
then make the string at that index make it lowercase and push it. if i % 2 = anything else make it
uppercase and push it. This will ensure that the string will start lowercase and alternate capitilzation as it moves through the string. */

function ransomCase(string) {
  var ransomString = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 !== 0) {
      var upperCaseString = string[i].toUpperCase();
      ransomString += upperCaseString;
    } else {
      var lowerCaseString = string[i].toLowerCase();
      ransomString += lowerCaseString;
    }
  }
  return ransomString;
}
