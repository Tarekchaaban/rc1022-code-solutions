/* var countdown = 4;
setInterval(() => {
  if (countdown <= 4 && countdown >= 1) {
    var $countdownDisplay = document.querySelector('.countdown-display');
    $countdownDisplay.textContent = countdown;
    countdown--;
  }
  if (countdown === 0) {
    $countdownDisplay.textContent = '~Earth Beeeelooowwwww Us~';
    clearInterval();
  }
}, 1000); */

setInterval(changeCountdown, 1000);
var countdown = 4;
function changeCountdown() {
  var $countdownDisplay = document.querySelector('.countdown-display');
  $countdownDisplay.textContent = countdown;
  countdown--;
  if (countdown < 0) {
    $countdownDisplay.textContent = '~Earth below Us~';
    clearInterval(1);
  }
}
