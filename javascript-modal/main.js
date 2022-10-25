var $modal = document.querySelector('.invisible');
var $modalButton = document.querySelector('.open-modal');
var $overlay = document.querySelector('.no-overlay');
var $redButton = document.querySelector('.no-button');

function showModal(event) {
  $modal.className = 'visible';
  $overlay.className = 'overlay';

}

function hideModal(event) {
  $modal.className = 'invisible';
  $overlay.className = 'no-overlay';

}

$modalButton.addEventListener('click', showModal);
$redButton.addEventListener('click', hideModal);
