let mainContainerCanvas = document.getElementById('main-container__canvas');
let color = document.getElementById('colorSelector');
var r = document.querySelector(':root');
var value = getComputedStyle(r);
let bcolor = document.getElementById('backgroundColor');
let rangeBar = document.getElementById('sizeRange');
let titleSize = document.getElementById('sliderTitle');

titleSize.innerHTML = '16 x 16';

function backgroundC(){
    grid()
    r.style.setProperty('--background', bcolor.value);
}


function eraser(){
    let boxes = document.querySelectorAll('.box')
    boxes.forEach(element => {
        element.addEventListener('mouseover', i => i.target.style.background = bcolor.value);
    });
}
function paint(){
    let boxes = document.querySelectorAll('.box')
    boxes.forEach(element => {
       element.addEventListener('mouseover', i => i.target.style.background = color.value)
    });
}

function raimbow(){
    let boxes = document.querySelectorAll('.box');
    boxes.forEach(element => {
        element.addEventListener('mouseover', i => i.target.style.background = '#' + Math.floor(Math.random()*16777215).toString(16))
     });
}

rangeBar.oninput = function() {
    titleSize.innerHTML = this.value + ' x ' + this.value;
  }


function grid(){
    mainContainerCanvas.innerHTML = '';
    r.style.setProperty('--col', rangeBar.value);
    r.style.setProperty('--row', rangeBar.value);
            for (let i =0;i < rangeBar.value * rangeBar.value; i++){
            let grid = document.createElement('div')
            mainContainerCanvas.appendChild(grid.cloneNode(true)).classList.add('box')
            }
}
grid()
