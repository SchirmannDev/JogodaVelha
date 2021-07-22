let frame = {
  a1: '', a2:'', a3: '',
 
 
  b1: '',b2 : '',b3: '',
  
  
  c1: '', c2: '',c3: ''
  
}

let turn = "";
let warning = '';
let playing = false;


document.querySelector('.reset').addEventListener('click', reset);

function reset () {
  warning = '';

  let random = Math.floor(Math.random() * 2);
 player = (random === 0) ? 'x' : 'o';

 for(let i in frame) {
   frame[i] = '';
 }

 playing = true;

 renderFrame();
 renderInfo();

}

function renderFrame() {
 for(let i in frame) {
   let item = document.querySelector(`div[data-item=${i}]`)
 }
}

function renderInfo() {

}