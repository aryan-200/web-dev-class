const start = document.getElementById('start');
const stop = document.getElementById('stop')
const reset = document.getElementById('reset')
const timer = document.getElementById('timer')

let time = 0;
let interval;

function gotimer() {
  time++;
  timer.innerHTML = time;
}

start.addEventListener('click',function() {
  interval = setInterval(gotimer,1000);
})

stop.addEventListener('click',function() {
  clearInterval(interval);
})

reset.addEventListener('click',function() {
  clearInterval(interval);
  time = 0;
  timer.innerHTML = 0;
})
