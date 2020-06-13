let lastRenderTime = 0;
const SNAKE_SPEED = 2;

function main(currentTime){
    window.requestAnimationFrame(main)
    const secondsSinceLastRendr = (currentTime - lastRenderTime) / 1000;
    if(secondsSinceLastRendr < 1 / SNAKE_SPEED) return;
    
    console.log('render');
    lastRenderTime = currentTime;
}

window.requestAnimationFrame(main)