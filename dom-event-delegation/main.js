var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', clickHandler);

function clickHandler(event) {
  console.log(event.target);
  console.log(event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    event.target.closest('.task-list-item').remove();

  }

}
