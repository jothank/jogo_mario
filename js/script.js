const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameover = document.querySelector('.gameover');
const counter = document.querySelector('.counter');



const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);

}

let pipePassed = false;
let count = 0;

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/mario-gameover.png';
        mario.style.width = '85px';
        mario.style.marginLeft = '50px';

        gameover.style.visibility = 'visible';

        clearInterval(loop);
    } else if (pipePosition <= 80 && !pipePassed) {
        pipePassed = true;
        count++;
        counter.innerHTML = count;
        console.log(pipePassed);
    } else if (pipePosition > 80) {
        pipePassed = false;
    }

}, 10);

document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);

function recarregarAPagina() {
    window.location.reload();
} 
