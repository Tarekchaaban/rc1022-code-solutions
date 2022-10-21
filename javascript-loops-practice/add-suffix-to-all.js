/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var suffixArray = [];
  for (var i = 0; i < words.length; i++) {
    var x = words[i] + suffix;
    suffixArray.push(x);
  }
  return suffixArray;
}
