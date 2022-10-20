/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var suffixArray = [];
  for (var i = 0; i < words.length; i++) {
    words[i] += suffix;
    suffixArray.push(words[i]);
  }
  return suffixArray;
}
