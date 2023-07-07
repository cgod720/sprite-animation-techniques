const canvas = document.querySelector('#canvas1');
const ctx = canvas.getContext('2d');
// console.log(ctx)
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;



const playerImage = new Image();
playerImage.src = './images/shadow_dog.png'


function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // ctx.fillRect(100, 50, 100, 100);
    // ctx.drawImage(image, sourcex, sy, sw, sheight, destinationx, dy, dWidth, dHeight)
    ctx.drawImage(playerImage, 0, 0, 575, 523, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    requestAnimationFrame(animate);
}

animate();