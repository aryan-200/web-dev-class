const start = document.getElementById('playButton');
const stop = document.getElementById('puaseButton');
const reset = document.getElementById('resetButton');
const timer = document.getElementById('timer');
const minute = document.getElementByClassName('minute');
const seconde = document.getElementsByClassName('seconde')

let time = 0;
let interval;

function watch() {
  time++;
  timer.innerHTML = time;
}

start.addEventListener('click',function() {
  interval = setInterval(watch,1000);
})

reset.addEventListener('click',function() {
  clearInterval(interval);
  time = 0;
  timer.innerHTML = 0;
})
if (seconde == 60) {
  minute = minute + 1;
  seconde = 0;
}
