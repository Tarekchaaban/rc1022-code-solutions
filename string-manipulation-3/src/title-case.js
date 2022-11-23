/* exported titleCase */
function titleCase(title) {

  var titleWordsArray = title.toLowerCase();
  titleWordsArray = titleWordsArray.split(' ');
  var updatedTitleWordsArray = [];
  var ApaTitle = '';
  for (var i = 0; i < titleWordsArray.length; i++) {
    if (titleWordsArray[i].toLowerCase().includes('javascript')) {
      if (titleWordsArray[i].includes(':')) {
        titleWordsArray[i] = 'JavaScript:';
        titleWordsArray[i + 1] = titleWordsArray[i + 1].charAt(0).toUpperCase() + titleWordsArray[i + 1].slice(1);
      } else {
        titleWordsArray[i] = 'JavaScript';
      }
      updatedTitleWordsArray.push(titleWordsArray[i]);
    } else if (titleWordsArray[i].includes(':')) {
      titleWordsArray[i] = titleWordsArray[i].charAt(0).toUpperCase() + titleWordsArray[i].slice(1);
      updatedTitleWordsArray.push(titleWordsArray[i]);
      titleWordsArray[i + 1] = titleWordsArray[i + 1].charAt(0).toUpperCase() + titleWordsArray[i + 1].slice(1);
    } else if (i === 0 || titleWordsArray[i].length > 3) {
      var firstLetter = titleWordsArray[i].slice(0, 1);
      var restOfWord = titleWordsArray[i].slice(1, titleWordsArray[i].length);
      restOfWord = restOfWord.toLowerCase();
      if (restOfWord.includes('-')) {
        var wordHyphenIndex = restOfWord.indexOf('-');
        var beforeHyphen = restOfWord.slice(0, wordHyphenIndex + 1);
        var capitalizedLetter = restOfWord[wordHyphenIndex + 1].toUpperCase();
        var afterCapitalization = restOfWord.slice(wordHyphenIndex + 2, restOfWord.length);
        restOfWord = `${beforeHyphen}${capitalizedLetter}${afterCapitalization}`;
      }
      var capitalizedFirstWord = firstLetter.toUpperCase() + restOfWord;
      updatedTitleWordsArray.push(capitalizedFirstWord);
    } else if (titleWordsArray[i].length <= 3 && titleWordsArray[i].toLowerCase() !== 'api' && titleWordsArray[i] !== 'and' && titleWordsArray[i] !== 'or' && titleWordsArray[i] !== 'nor' && titleWordsArray[i] !== 'but' && titleWordsArray[i] !== 'a' && titleWordsArray[i] !== 'an' && titleWordsArray[i] !== 'the' && titleWordsArray[i] !== 'as' && titleWordsArray[i] !== 'at' && titleWordsArray[i] !== 'by' && titleWordsArray[i] !== 'for' && titleWordsArray[i] !== 'in' && titleWordsArray[i] !== 'of' && titleWordsArray[i] !== 'on' && titleWordsArray[i] !== 'per' && titleWordsArray[i] !== 'to') {
      var firstLetterSmall = titleWordsArray[i].slice(0, 1);
      var restOfWordSmall = titleWordsArray[i].slice(1, titleWordsArray[i].length);
      var capitalizedFirstWordSmall = firstLetterSmall.toUpperCase() + restOfWordSmall.toLowerCase();
      updatedTitleWordsArray.push(capitalizedFirstWordSmall);
    } else if (titleWordsArray[i].length <= 3 && i !== 0 && titleWordsArray[i].toLowerCase() !== 'api') {
      var lowerCaseThreeLetters = titleWordsArray[i].toLowerCase();
      updatedTitleWordsArray.push(lowerCaseThreeLetters);
    } else if (titleWordsArray[i].toLowerCase() === 'api') {
      var ApiCapitalized = titleWordsArray[i].toUpperCase();
      updatedTitleWordsArray.push(ApiCapitalized);
    }
  }
  ApaTitle += updatedTitleWordsArray.join(' ');
  return ApaTitle;
}
