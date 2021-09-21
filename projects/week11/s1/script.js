let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissors = document.getElementById('Scissors')
let first = document.getElementById('first')
let second = document.getElementById('second')
let reset = document.getElementById('reset')
let rps = ['rock','paper','scissors']
let user = 0;


rock.addEventListener('click',function () {
  let pc = rps[Math.floor(Math.random() * 3)];
  user = "rock";
  if (pc == "paper") {
    first.innerHTML = 'pc:' + (first + 1);
    alert(pc , user , 'pcwin');
  }
  if (pc == "scissors" ) {
    second.innerHTML = 'user:' + (second + 1);
    alert(pc , user , 'userwin');
  }
  if (pc == "rock" ) {
    alert(pc , user , 'draw');
  }
})

paper.addEventListener('click',function () {
  let pc = rps[Math.floor(Math.random() * 3)];
  user = "paper";
  if (pc == "rock") {
    second.innerHTML = 'user:' + first + 1;
    alert(pc , user , 'userwin');
  }
  if (pc == "scissors" ) {
    first.innerHTML = 'pc:' + second + 1;
    alert(pc , user , 'pcwin');
  }
  if (pc == "paper" ) {
    alert(pc , user , 'draw');
  }
})

scissors.addEventListener('click',function () {
  let pc = rps[Math.floor(Math.random() * 3)];
  user = "scissors";
  if (pc == "rock") {
    first.innerHTML = 'pc:' + first + 1;
    alert(pc , user , 'pcwin');
  }
  if (pc == "paper" ) {
    let second = 'user:' + second + 1;
    alert(pc , user , 'userwin');
  }
  if (pc == "scissors" ) {
    alert(pc , user , 'draw');
  }
})

reset.addEventListener('click',function () {
   first.innerHTML = 0;
   second.innerHTML = 0;
})
