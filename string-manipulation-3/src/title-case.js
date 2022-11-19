/* exported titleCase */
function titleCase(title) {

  var titleWordsArray = title.split(' ');
  var updatedTitleWordsArray = [];
  var ApaTitle = '';
  for (var i = 0; i < titleWordsArray.length; i++) {
    if (titleWordsArray[i].toLowerCase() === 'api') {
      var ApiCapitalized = titleWordsArray[i].toUpperCase();
      updatedTitleWordsArray.push(ApiCapitalized);
    } else if (i === 0 || titleWordsArray[i].length > 3) {
      var firstLetter = titleWordsArray[i].slice(0, 1);
      var restOfWord = titleWordsArray[i].slice(1, titleWordsArray[i].length);
      var capitalizedFirstWord = firstLetter.toUpperCase() + restOfWord.toLowerCase();
      updatedTitleWordsArray.push(capitalizedFirstWord);
    } else if (titleWordsArray[i].length <= 3 && i !== 0) {
      var lowerCaseThreeLetters = titleWordsArray[i].toLowerCase();
      updatedTitleWordsArray.push(lowerCaseThreeLetters);
    } else if (titleWordsArray[i].length <= 3 && titleWordsArray[i] !== 'and' && titleWordsArray[i] !== 'or' && titleWordsArray[i] !== 'nor' && titleWordsArray[i] !== 'but' && titleWordsArray[i] !== 'a' && titleWordsArray[i] !== 'an' && titleWordsArray[i] !== 'the' && titleWordsArray[i] !== 'as' && titleWordsArray[i] !== 'at' && titleWordsArray[i] !== 'by' && titleWordsArray[i] !== 'for' && titleWordsArray[i] !== 'in' && titleWordsArray[i] !== 'of' && titleWordsArray[i] !== 'on' && titleWordsArray[i] !== 'per' && titleWordsArray[i] !== 'to') {
      var firstLetterSmall = titleWordsArray[i].slice(0, 1);
      var restOfWordSmall = titleWordsArray[i].slice(1, titleWordsArray[i].length);
      var capitalizedFirstWordSmall = firstLetterSmall.toUpperCase() + restOfWordSmall.toLowerCase();
      updatedTitleWordsArray.push(capitalizedFirstWordSmall);
    } else if (titleWordsArray[i] === 'api') {
      ApiCapitalized = titleWordsArray[i].toUpperCase();
      updatedTitleWordsArray.push(ApiCapitalized);
    }
  }
  ApaTitle += updatedTitleWordsArray.join(' ');
  return ApaTitle;
}
