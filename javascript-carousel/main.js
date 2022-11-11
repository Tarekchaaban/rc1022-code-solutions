var $chevronLeft = document.querySelector('.fa-chevron-left');
var $chevronRight = document.querySelector('.fa-chevron-right');
var $displayImage = document.querySelector('.display-image');
var $circleZero = document.querySelector('.zero');
var $circleOne = document.querySelector('.one');
var $circleTwo = document.querySelector('.two');
var $circleThree = document.querySelector('.three');
var $circleFour = document.querySelector('.four');
var $circleContainer = document.querySelector('.circles');
var $circleArray = document.querySelectorAll('.circle');
var intervalCounter = 0;
var pictureArray = [
  'images/001.png',
  'images/004.png',
  'images/007.png',
  'images/025.png',
  'images/039.png'
];

var intervalId = setInterval(rotate, 3000);

function clearCircles() {
  $circleZero.className = 'fa-regular fa-circle circle zero';
  $circleOne.className = 'fa-regular fa-circle circle one';
  $circleTwo.className = 'fa-regular fa-circle circle two';
  $circleThree.className = 'fa-regular fa-circle circle three';
  $circleFour.className = 'fa-regular fa-circle circle four';
}

function rotate() {
  if (intervalCounter === pictureArray.length - 1) {
    intervalCounter = 0;
  } else {
    intervalCounter++;
  }
  $displayImage.setAttribute('src', pictureArray[intervalCounter]);
  clearCircles();
  $circleArray[intervalCounter].classList.replace('fa-regular', 'fa-solid');
  clearInterval(intervalId);
  intervalId = setInterval(rotate, 3000);
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
