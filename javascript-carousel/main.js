var $chevronLeft = document.querySelector('.fa-chevron-left');
var $chevronRight = document.querySelector('.fa-chevron-right');
var $displayImage = document.querySelector('.display-image');
var $circleZero = document.querySelector('.zero');
var $circleOne = document.querySelector('.one');
var $circleTwo = document.querySelector('.two');
var $circleThree = document.querySelector('.three');
var $circleFour = document.querySelector('.four');
var $circleContainer = document.querySelector('.circles');
var intervalCounter = 0;
var pictureArray = [
  'images/001.png',
  'images/004.png',
  'images/007.png',
  'images/025.png',
  'images/039.png'
];

var intervalId = setInterval(rotate, 3000);

function rotate() {
  intervalCounter++;
  $displayImage.setAttribute('src', pictureArray[intervalCounter]);
  clearInterval(intervalId);
  intervalId = setInterval(rotate, 3000);
  if (intervalCounter === 0) {
    $circleZero.className = 'fa-solid fa-circle circle zero';
    $circleOne.className = 'fa-regular fa-circle circle one';
    $circleTwo.className = 'fa-regular fa-circle circle two';
    $circleThree.className = 'fa-regular fa-circle circle three';
    $circleFour.className = 'fa-regular fa-circle circle four';
  } else if (intervalCounter === 1) {
    $circleZero.className = 'fa-regular fa-circle circle zero';
    $circleOne.className = 'fa-solid fa-circle circle one';
    $circleTwo.className = 'fa-regular fa-circle circle two';
    $circleThree.className = 'fa-regular fa-circle circle three';
    $circleFour.className = 'fa-regular fa-circle circle four';
  } else if (intervalCounter === 2) {
    $circleZero.className = 'fa-regular fa-circle circle zero';
    $circleOne.className = 'fa-regular fa-circle circle one';
    $circleTwo.className = 'fa-solid fa-circle circle two';
    $circleThree.className = 'fa-regular fa-circle circle three';
    $circleFour.className = 'fa-regular fa-circle circle four';
  } else if (intervalCounter === 3) {
    $circleZero.className = 'fa-regular fa-circle circle zero';
    $circleOne.className = 'fa-regular fa-circle circle one';
    $circleTwo.className = 'fa-regular fa-circle circle two';
    $circleThree.className = 'fa-solid fa-circle circle three';
    $circleFour.className = 'fa-regular fa-circle circle four';
  } else if (intervalCounter === 4) {
    $circleZero.className = 'fa-regular fa-circle circle zero';
    $circleOne.className = 'fa-regular fa-circle circle one';
    $circleTwo.className = 'fa-regular fa-circle circle two';
    $circleThree.className = 'fa-regular fa-circle circle three';
    $circleFour.className = 'fa-solid fa-circle circle four';
  } else {
    intervalCounter = 0;
    $circleZero.className = 'fa-solid fa-circle circle zero';
    $circleOne.className = 'fa-regular fa-circle circle one';
    $circleTwo.className = 'fa-regular fa-circle circle two';
    $circleThree.className = 'fa-regular fa-circle circle three';
    $circleFour.className = 'fa-regular fa-circle circle four';
    $displayImage.setAttribute('src', pictureArray[intervalCounter]);
  }
}

$chevronRight.addEventListener('click', rightHandler);
$chevronLeft.addEventListener('click', leftHandler);

function rightHandler(event) {
  rotate();
}

function leftHandler(event) {
  intervalCounter -= 2;
  if (intervalCounter < -1) {
    intervalCounter = 3;
  }
  rotate();
}

$circleContainer.addEventListener('click', viewSwap);
function viewSwap(event) {
  if (event.target.matches('.zero')) {
    intervalCounter = -1;
    rotate();
  } else if (event.target.matches('.one')) {
    intervalCounter = 0;
    rotate();
  } else if (event.target.matches('.two')) {
    intervalCounter = 1;
    rotate();
  } else if (event.target.matches('.three')) {
    intervalCounter = 2;
    rotate();
  } else if (event.target.matches('.four')) {
    intervalCounter = 3;
    rotate();
  }
}

/* OLD VERSION
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

} */

/*
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

*/
