let mainContainerCanvas = document.getElementById('main-container__canvas');
var r = document.querySelector(':root');

let size = parseInt(prompt('choose a size for the canvas'));


function grid(px){
    r.style.setProperty('--col', px);
    r.style.setProperty('--row', px);

            for (let i =0;i < px * px; i++){
            let grid = document.createElement('div')
            mainContainerCanvas.appendChild(grid.cloneNode(true)).classList.add('box')
            }
}
grid(size)


let boxes = document.querySelectorAll('.box')


let down = false;

document.body.addEventListener('mousedown',function(){
    down = true;
})
document.body.addEventListener('mouseup',function(){
    down = false;
})

document.body.addEventListener('mouseup',function(){
    if(down){
        console.log('down')
    }else{
        console.log('up')
    }
})
function eraser(){
        boxes.forEach(element => {
            element.addEventListener('mouseover', i => i.target.style.background = '#9999')
        });
}
function paint(){
    if (!down){
        console.log('algo deberia pasar');
        boxes.forEach(element => {
           element.addEventListener('mouseover', i => i.target.style.background = '#000')
        });

    }
}

