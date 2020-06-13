import {update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection} from './snake.js';
import {update as updateFood, draw as drawFood} from './food.js';
import {outsideGrid} from './grid.js';

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.querySelector('.board');

function main(currentTime){

    if(gameOver){
        return alert('GAME OVER...!');
    }

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
    updateFood();
    checkDeath();
}
function draw(){
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}