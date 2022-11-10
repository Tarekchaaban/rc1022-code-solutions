var $chevronLeft = document.querySelector('.fa-chevron-left');
var $chevronRight = document.querySelector('.fa-chevron-right');
var $displayImage = document.querySelector('.display-image');
var $circleOne = document.querySelector('.one');
var $circleTwo = document.querySelector('.two');
var $circleThree = document.querySelector('.three');
var $circleFour = document.querySelector('.four');
var $circleFive = document.querySelector('.five');
$chevronRight.addEventListener('click', rightHandler);
$chevronLeft.addEventListener('click', leftHandler);
var count = 0;
function rightHandler(event) {
  if (count === 0) {
    $displayImage.setAttribute('src', 'images/004.png');
    $circleOne.className = 'fa-regular fa-circle circle one';
    $circleTwo.className = 'fa-solid fa-circle circle two';
    $circleThree.className = 'fa-regular fa-circle circle three';
    $circleFour.className = 'fa-regular fa-circle circle four';
    $circleFive.className = 'fa-regular fa-circle circle five';
    count++;
  } else if (count === 1) {
    $displayImage.setAttribute('src', 'images/007.png');
    $circleOne.className = 'fa-regular fa-circle circle one';
    $circleTwo.className = 'fa-regular fa-circle circle two';
    $circleThree.className = 'fa-solid fa-circle circle three';
    $circleFour.className = 'fa-regular fa-circle circle four';
    $circleFive.className = 'fa-regular fa-circle circle five';
    count++;
  } else if (count === 2) {
    $displayImage.setAttribute('src', 'images/025.png');
    $circleOne.className = 'fa-regular fa-circle circle one';
    $circleTwo.className = 'fa-regular fa-circle circle two';
    $circleThree.className = 'fa-regular fa-circle circle three';
    $circleFour.className = 'fa-solid fa-circle circle four';
    $circleFive.className = 'fa-regular fa-circle circle five';
    count++;
  } else if (count === 3) {
    $displayImage.setAttribute('src', 'images/039.png');
    $circleOne.className = 'fa-regular fa-circle circle one';
    $circleTwo.className = 'fa-regular fa-circle circle two';
    $circleThree.className = 'fa-regular fa-circle circle three';
    $circleFour.className = 'fa-regular fa-circle circle four';
    $circleFive.className = 'fa-solid fa-circle circle five';
    count++;
  } else {
    $displayImage.setAttribute('src', 'images/001.png');
    $circleOne.className = 'fa-solid fa-circle circle one';
    $circleTwo.className = 'fa-regular fa-circle circle two';
    $circleThree.className = 'fa-regular fa-circle circle three';
    $circleFour.className = 'fa-regular fa-circle circle four';
    $circleFive.className = 'fa-regular fa-circle circle five';
    count = 0;
  }

}

/* function leftHandler(event) {
  if (count === 0) {
    $displayImage.setAttribute('src', 'images/039.png');
    count = 3;
  } else if (count === 3) {
    $displayImage.setAttribute('src', 'images/025.png');
    count--;
  } else if (count === 2) {
    $displayImage.setAttribute('src', 'images/007.png');
    count--;
  } else if (count === 1) {
    $displayImage.setAttribute('src', 'images/004.png');
    count--;
  } else {
    $displayImage.setAttribute('src', 'images/001.png');
    count = 0;
  }
} */
function leftHandler(event) {
  if (count === 0) {
    $displayImage.setAttribute('src', 'images/039.png');
    $circleOne.className = 'fa-regular fa-circle circle one';
    $circleTwo.className = 'fa-regular fa-circle circle two';
    $circleThree.className = 'fa-regular fa-circle circle three';
    $circleFour.className = 'fa-regular fa-circle circle four';
    $circleFive.className = 'fa-solid fa-circle circle five';
    count++;
  } else if (count === 1) {
    $displayImage.setAttribute('src', 'images/025.png');
    $circleOne.className = 'fa-regular fa-circle circle one';
    $circleTwo.className = 'fa-regular fa-circle circle two';
    $circleThree.className = 'fa-regular fa-circle circle three';
    $circleFour.className = 'fa-solid fa-circle circle four';
    $circleFive.className = 'fa-regular fa-circle circle five';
    count++;
  } else if (count === 2) {
    $displayImage.setAttribute('src', 'images/007.png');
    $circleOne.className = 'fa-regular fa-circle circle one';
    $circleTwo.className = 'fa-regular fa-circle circle two';
    $circleThree.className = 'fa-solid fa-circle circle three';
    $circleFour.className = 'fa-regular fa-circle circle four';
    $circleFive.className = 'fa-regular fa-circle circle five';
    count++;
  } else if (count === 3) {
    $displayImage.setAttribute('src', 'images/004.png');
    $circleOne.className = 'fa-regular fa-circle circle one';
    $circleTwo.className = 'fa-solid fa-circle circle two';
    $circleThree.className = 'fa-regular fa-circle circle three';
    $circleFour.className = 'fa-regular fa-circle circle four';
    $circleFive.className = 'fa-regular fa-circle circle five';
    count++;
  } else if (count === 4) {
    $displayImage.setAttribute('src', 'images/001.png');
    $circleOne.className = 'fa-solid fa-circle circle one';
    $circleTwo.className = 'fa-regular fa-circle circle two';
    $circleThree.className = 'fa-regular fa-circle circle three';
    $circleFour.className = 'fa-regular fa-circle circle four';
    $circleFive.className = 'fa-regular fa-circle circle five';
    count++;
  } else {
    $displayImage.setAttribute('src', 'images/039.png');
    $circleOne.className = 'fa-regular fa-circle circle one';
    $circleTwo.className = 'fa-regular fa-circle circle two';
    $circleThree.className = 'fa-regular fa-circle circle three';
    $circleFour.className = 'fa-regular fa-circle circle four';
    $circleFive.className = 'fa-solid fa-circle circle five';
    count = 0;
  }
}

setInterval(changeCountdown, 3000);
var countdown = 5;

function changeCountdown() {
  if (countdown > 4) {
    $displayImage.setAttribute('src', 'images/001.png');
    $circleOne.className = 'fa-solid fa-circle circle one';
    $circleTwo.className = 'fa-regular fa-circle circle two';
    $circleThree.className = 'fa-regular fa-circle circle three';
    $circleFour.className = 'fa-regular fa-circle circle four';
    $circleFive.className = 'fa-regular fa-circle circle five';
    countdown--;
  } else if (countdown > 3) {
    $displayImage.setAttribute('src', 'images/004.png');
    $circleOne.className = 'fa-regular fa-circle circle one';
    $circleTwo.className = 'fa-solid fa-circle circle two';
    $circleThree.className = 'fa-regular fa-circle circle three';
    $circleFour.className = 'fa-regular fa-circle circle four';
    $circleFive.className = 'fa-regular fa-circle circle five';
    countdown--;
  } else if (countdown > 2) {
    $displayImage.setAttribute('src', 'images/007.png');
    $circleOne.className = 'fa-regular fa-circle circle one';
    $circleTwo.className = 'fa-regular fa-circle circle two';
    $circleThree.className = 'fa-solid fa-circle circle three';
    $circleFour.className = 'fa-regular fa-circle circle four';
    $circleFive.className = 'fa-regular fa-circle circle five';
    countdown--;
  } else if (countdown > 1) {
    $displayImage.setAttribute('src', 'images/025.png');
    $circleOne.className = 'fa-regular fa-circle circle one';
    $circleTwo.className = 'fa-regular fa-circle circle two';
    $circleThree.className = 'fa-regular fa-circle circle three';
    $circleFour.className = 'fa-solid fa-circle circle four';
    $circleFive.className = 'fa-regular fa-circle circle five';
    countdown--;
  } else if (countdown > 0) {
    $displayImage.setAttribute('src', 'images/039.png');
    $circleOne.className = 'fa-regular fa-circle circle one';
    $circleTwo.className = 'fa-regular fa-circle circle two';
    $circleThree.className = 'fa-regular fa-circle circle three';
    $circleFour.className = 'fa-regular fa-circle circle four';
    $circleFive.className = 'fa-solid fa-circle circle five';
    countdown--;
  } else if (countdown === 0) {
    $displayImage.setAttribute('src', 'images/001.png');
    $circleOne.className = 'fa-solid fa-circle circle one';
    $circleTwo.className = 'fa-regular fa-circle circle two';
    $circleThree.className = 'fa-regular fa-circle circle three';
    $circleFour.className = 'fa-regular fa-circle circle four';
    $circleFive.className = 'fa-regular fa-circle circle five';
    countdown = 5;

  }
}

$circleOne.addEventListener('click', viewSwap);
$circleTwo.addEventListener('click', viewSwap);
$circleThree.addEventListener('click', viewSwap);
$circleFour.addEventListener('click', viewSwap);
$circleFive.addEventListener('click', viewSwap);

function viewSwap(event) {
  if (event.target.matches('.one')) {
    $displayImage.setAttribute('src', 'images/001.png');
    $circleOne.className = 'fa-solid fa-circle circle one';
    $circleTwo.className = 'fa-regular fa-circle circle two';
    $circleThree.className = 'fa-regular fa-circle circle three';
    $circleFour.className = 'fa-regular fa-circle circle four';
    $circleFive.className = 'fa-regular fa-circle circle five';
  } else if (event.target.matches('.two')) {
    $displayImage.setAttribute('src', 'images/004.png');
    $circleOne.className = 'fa-regular fa-circle circle one';
    $circleTwo.className = 'fa-solid fa-circle circle two';
    $circleThree.className = 'fa-regular fa-circle circle three';
    $circleFour.className = 'fa-regular fa-circle circle four';
    $circleFive.className = 'fa-regular fa-circle circle five';
  } else if (event.target.matches('.three')) {
    $displayImage.setAttribute('src', 'images/007.png');
    $circleOne.className = 'fa-regular fa-circle circle one';
    $circleTwo.className = 'fa-regular fa-circle circle two';
    $circleThree.className = 'fa-solid fa-circle circle three';
    $circleFour.className = 'fa-regular fa-circle circle four';
    $circleFive.className = 'fa-regular fa-circle circle five';
  } else if (event.target.matches('.four')) {
    $displayImage.setAttribute('src', 'images/025.png');
    $circleOne.className = 'fa-regular fa-circle circle one';
    $circleTwo.className = 'fa-regular fa-circle circle two';
    $circleThree.className = 'fa-regular fa-circle circle three';
    $circleFour.className = 'fa-solid fa-circle circle four';
    $circleFive.className = 'fa-regular fa-circle circle five';
  } else if (event.target.matches('.five')) {
    $displayImage.setAttribute('src', 'images/039.png');
    $circleOne.className = 'fa-regular fa-circle circle one';
    $circleTwo.className = 'fa-regular fa-circle circle two';
    $circleThree.className = 'fa-regular fa-circle circle three';
    $circleFour.className = 'fa-regular fa-circle circle four';
    $circleFive.className = 'fa-solid fa-circle circle five';
  }
}
