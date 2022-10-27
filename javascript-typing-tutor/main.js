var $spans = document.querySelectorAll('span');
var counter = 0;
function typingHandler(event) {
  if (event.key === $spans[counter].textContent) {
    $spans[counter].className = 'green';
    $spans[counter + 1].className = 'underline';
    counter++;
  } else {
    $spans[counter].className = 'red underline';
  }

}

document.addEventListener('keydown', typingHandler);
