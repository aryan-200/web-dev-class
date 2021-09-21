const start = document.getElementById('playButton');
const stop = document.getElementById('puaseButton');
const reset = document.getElementById('resetButton');
const timer = document.getElementById('timer');
const minute = document.getElementByClassName('minute');
const seconde = document.getElementsByClassName('seconde')

let time = 0;
let interval;

start.addEventListener('click',function() {
  interval = setInterval(seconde,1000);
})

reset.addEventListener('click',function() {
  clearInterval(interval);
  time = 0;
  timer.innerHTML = 00:00;
})
if (seconde == 60) {
  minute.innerHTML = minute + 1;
  seconde.innerHTML = 0;
}
