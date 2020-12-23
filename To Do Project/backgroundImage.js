const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `image/${imgNumber}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function randomNumberGenerator() {
    // 1~5까지의 숫자를 반환
    return Math.ceil(Math.random()*IMG_NUMBER);
}

function init() {
    const randomNumber = randomNumberGenerator();
    paintImage(randomNumber);
}

init();