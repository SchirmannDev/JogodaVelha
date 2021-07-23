let frame = {
  a1: '', a2:'', a3: '',
 
 
  b1: '',b2 : '',b3: '',
  
  
  c1: '', c2: '',c3: ''
  
}

let turn = "";
let warning = '';
let playing = false;


document.querySelector('.reset').addEventListener('click', reset);
document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('click', itemClick);
});

function itemClick(event) {
 let item = event.target.getAttribute('data-item');
 if(frame[item] === '') {
   frame[item] = turn;
   renderFrame();
   togglePlayer();
 }
}

function reset () {
  warning = '';

  let random = Math.floor(Math.random() * 2);
 turn = (random === 0) ? 'x' : 'o';

 for(let i in frame) {
   frame[i] = '';
 }

 playing = true;

 renderFrame();
 renderInfo();

}

function renderFrame() {
 for(let i in frame) {
   let item = document.querySelector(`div[data-item=${i}]`);
     item.innerHTML = frame[i];
   } 
   checkGame();
 }

function renderInfo() {
  document.querySelector('.vez').innerHTML = turn;
  document.querySelector('.resultado').innerHTML = warning;
}

function togglePlayer() {
turn = (turn === 'x') ? 'o' : 'x';
renderInfo();
}

function checkGame() {
  if(checkWinnerFor('x')) {
    warning = 'O "x" Venceu!';
    playing= false;
  } else if (checkWinnerFor('o')) { 
    warning = 'O "o" Venceu ';
    playing = false;
  }else if(isFull()) {
    warning = 'DEU EMPATE';
    playing = false;
  
  }
} 