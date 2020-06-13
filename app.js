import {update as updateSnake, draw as drawSnake, SNAKE_SPEED} from './snake.js';

let lastRenderTime = 0;
const gameBoard = document.querySelector('.board');

function main(currentTime){
    window.requestAnimationFrame(main)
    const secondsSinceLastRendr = (currentTime - lastRenderTime) / 1000;
    if(secondsSinceLastRendr < 1 / SNAKE_SPEED) return;
        
    lastRenderTime = currentTime;

    update();
    draw();
}

window.requestAnimationFrame(main)

function update(){
    updateSnake();
}
function draw(){
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
}