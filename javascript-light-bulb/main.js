var $body = document.querySelector('.body-white');
var $circle = document.querySelector('.yellow-circle');

function handleColorChange(event) {
  if ($circle.className === 'yellow-circle') {
    $body.className = 'body-black';
    $circle.className = 'charcoal-circle';
  } else {
    $body.className = 'body-white';
    $circle.className = 'yellow-circle';
  }
}

$circle.addEventListener('click', handleColorChange);
