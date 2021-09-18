let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissors = document.getElementById('Scissors')
let first = document.getElementById('first')
let second = document.getElementById('second')
let rps = ['rock','paper','scissors']
let user = 0;
let pc = rps[Math.floor(Math.random() * 3)];

rock.addEventListener('click',function () {
  let user = rock;
  if (pc == paper) {
    let first = 'pc:' + first + 1;
    alert(pc , user , 'pcwin');
  }
  if (pc == scissors ) {
    let second = 'user:' + second + 1;
    alert(pc , user , 'userwin');
  }
  if (pc == rock ) {
    alert(pc , user , 'draw');
  }
})

paper.addEventListener('click',function () {
  let user = paper;
  if (pc == rock) {
    let first = 'user:' + first + 1;
    alet(pc , user , 'userwin');
  }
  if (pc == scissors ) {
    let first = 'pc:' + second + 1;
    alert(pc , user , 'pcwin');
  }
  if (pc == paper ) {
    alert(pc , user , 'draw');
  }
})

scissors.addEventListener('click',function () {
  let user = scissors ;
  if (pc == rock) {
    let first = 'pc:' + first + 1;
    alet(pc , user , 'pcwin');
  }
  if (pc == paper ) {
    let first = 'user:' + second + 1;
    alert(pc , user , 'userwin');
  }
  if (pc == scissors ) {
    alert(pc , user , 'draw');
  }
})
