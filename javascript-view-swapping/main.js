var $tabContainer = document.querySelector('.tab-container');
var $tabList = document.querySelectorAll('.tab');
var $viewList = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', clickHandler);

function clickHandler(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tabList.length; i++) {
      if (event.target === $tabList[i]) {
        $tabList[i].className = 'tab active';
      } else {
        $tabList[i].className = 'tab';
      }
    }
    var $dataViewValue = event.target.getAttribute('data-view');
    for (i = 0; i < $viewList.length; i++) {
      if ($viewList[i].getAttribute('data-view') === $dataViewValue) {
        $viewList[i].className = 'view';
      } else {
        $viewList[i].className = 'view hidden';
      }
    }
  }
}
