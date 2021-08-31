function game(){

  var rounds = parseInt(prompt('write rounds count'));

  for (let counter = 0; counter < rounds; counter++) {
    var items = ['r','p','s']

    var human = prompt('select between r or p or s')

    var pc = items[Math.floor(Math.random() * 3)];

    console.log('human:', human);
    console.log('pc:',pc);

    if ((human == 'r' && pc == 's') || (human == 'p' && pc == 'r') || (human == 's' && pc == 'p') ){
      alert('human win!')
    }else if((human == 's' && pc == 'r') || (human == 'r' && pc == 'p') || (human == 'p' && pc == 's')) {
      alert('pc win!')
    }else if (human == pc) {
      alert('draw')
    }else {
      alert('wrong input!')
    }
  }

}
game();
