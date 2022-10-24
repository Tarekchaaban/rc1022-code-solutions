/* create a buttonClicked variable that's initialized at 0, then use querySelector
to select both the hotbutton and clickCount classes and assign them to a variable.
Then create a function that increments the buttonClicked variable by 1 each time the button is clicked
and use the textContent method to update the number on clickCount. Then use conditionals
to change the .hot-button's css class based on the amount of clicks that have been made. */

var buttonClicked = 0;
var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');
function handleMouseClicks(event) {
  buttonClicked++;
  $clickCount.textContent = buttonClicked;
  if (buttonClicked > 15) {
    $hotButton.className = 'hot-button nuclear';
  } else if (buttonClicked > 12) {
    $hotButton.className = 'hot-button hot';
  } else if (buttonClicked > 9) {
    $hotButton.className = 'hot-button warm';
  } else if (buttonClicked > 6) {
    $hotButton.className = 'hot-button tepid';
  } else if (buttonClicked > 3) {
    $hotButton.className = 'hot-button cool';
  }
}
$hotButton.addEventListener('click', handleMouseClicks);
