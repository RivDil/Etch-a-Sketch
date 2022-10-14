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
let mouseDown = false;

document.body.addEventListener('mousedown',function(){
    return mouseDown = true;

});

document.body.addEventListener('mouseup',function(){
    return mouseDown = false
});


function eraser(){
        boxes.forEach(element => {
            element.addEventListener('mouseover', i => i.target.style.background = '#9999')
        });
}
function paint(){
        return boxes.forEach(element => {
            element.addEventListener('mouseover', i => i.target.style.background = '#000')
        });
}

