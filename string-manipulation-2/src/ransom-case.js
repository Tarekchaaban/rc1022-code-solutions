/* exported ransomCase */
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
