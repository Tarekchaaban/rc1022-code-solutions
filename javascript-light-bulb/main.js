var $body = document.querySelector('.body-white');
var $circle = document.querySelector('.yellow-circle');
var isLightOn = true;

function handleColorChange(event) {
  if (isLightOn === true) {
    $body.className = 'body-black';
    $circle.className = 'charcoal-circle';
    isLightOn = false;
  } else {
    $body.className = 'body-white';
    $circle.className = 'yellow-circle';
    isLightOn = true;
  }
}

$circle.addEventListener('click', handleColorChange);
