var $modal = document.querySelector('.invisible');
var $modalButton = document.querySelector('.open-modal');
var $overlay = document.querySelector('.no-overlay');
var $redButton = document.querySelector('.no-button');
var isModalOpen = false;

function modalHandler(event) {
  if (isModalOpen === false) {
    $modal.className = 'visible';
    $overlay.className = 'overlay';
    isModalOpen = true;
  }
}

function modalHandlerTwo(event) {
  if (isModalOpen === true) {
    $modal.className = 'invisible';
    $overlay.className = 'no-overlay';
    isModalOpen = false;
  }
}

$modalButton.addEventListener('click', modalHandler);
$redButton.addEventListener('click', modalHandlerTwo);
