const canvas = document.querySelector('#canvas1');
const ctx = canvas.getContext('2d');
// console.log(ctx)
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;



const playerImage = new Image();
playerImage.src = './images/shadow_dog.png'
const spriteWidth = 575;
const spriteHeight = 523;
let gameFrame = 0;
let staggerFrame = 4;



// Learned one can use Arrays like objects by giving the array a key name instead of an index
const spriteAnimations = [];
const animationStates = [
    {
        name: 'idle',
        frames: 7
    },
    {
        name: 'jump',
        frames: 7
    },
    {
        name: 'fall',
        frames: 7
    },
    {
        name: 'run',
        frames: 9
    },
    {
        name: 'dizzy',
        frames: 11
    },
    {
        name: 'sit',
        frames: 5
    },
    {
        name: 'roll',
        frames: 7
    },
    {
        name: 'bite',
        frames: 7
    },
    {
        name: 'ko',
        frames: 11
    },
    {
        name: 'getHit',
        frames: 4
    }

]

animationStates.forEach((state, index) => {
    let frames = {
        loc: []
    }
    console.log(index)
    for (let j = 0; j < state.frames; j++) {
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({ x: positionX, y: positionY })
    }
    spriteAnimations[state.name] = frames
});


// window.addEventListener('keydown', (e) => {
//     console.log(e.key)
//     if(e.key === 'ArrowRight') frameX++;
// })


function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);


    // Calculate position of wanted frame in sequence
    let position = Math.floor(gameFrame / staggerFrame) % spriteAnimations['idle'].loc.length;

    // Gets appropriate frame in sequence
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations["idle"].loc[position].y

    // ctx.drawImage(image, sourcex, sy, sw, sheight, destinationx, dy, dw, dh)
    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight)

    

    gameFrame++
    requestAnimationFrame(animate);
}

animate();