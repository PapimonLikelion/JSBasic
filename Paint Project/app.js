const canvas = document.getElementById("jsCanvas");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveButton = document.getElementById("jsSave");

/* Default 설정 값 */
let painting = false;
let filling = false;
const CANVAS_SIZE = 630;
const DEFAULT_LINE_COLOR = "black";
const DEFAULT_BACKGROUND_COLOR = "white";
const DEFAULT_WIDTH = 2.5;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

const context = canvas.getContext('2d');
context.strokeStyle = DEFAULT_LINE_COLOR;
context.lineWidth = DEFAULT_WIDTH;
context.fillStyle = DEFAULT_BACKGROUND_COLOR;
context.fillRect(0, 0, canvas.width, canvas.height);

/* 색상 제어 */
Array
    .from(colors)
    .forEach(color => color.addEventListener("click", changeColor));

function changeColor(event) {
    context.strokeStyle = event.target.style.backgroundColor;
    context.fillStyle = event.target.style.backgroundColor;
}

/* 굵기 제어 */
range.addEventListener("input", changeWidth);

function changeWidth(event) {
    context.lineWidth = event.target.value;
}

/* 채우기 or 그리기 제어 */
mode.addEventListener("click", changeMode);

function changeMode(event) {
    if (filling) { //채우기 -> 그리기 모드
        filling = false;
        mode.innerText = "FILL";
    } else { //그리기 -> 채우기 모드
        filling = true;
        mode.innerText = "PAINT";
    }
}

/* 그림 그리기 */
canvas.addEventListener("mousemove", onMouseMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mouseleave", stopPainting);
canvas.addEventListener("click", fillInCanvas);

function onMouseMove(event) {
    if (!filling) {
        const x = event.offsetX;
        const y = event.offsetY;
        if (painting) {
            context.lineTo(x, y);
            context.stroke();
        }
    }
}

function startPainting(event) {
    if (!filling) {
        painting = true;
        const x = event.offsetX;
        const y = event.offsetY;
        context.beginPath();
        context.moveTo(x, y);
    }
}

function stopPainting() {
    if (!filling) {
        painting = false;
    }
}

function fillInCanvas() {
    if (filling) {
        context.fillRect(0, 0, canvas.width, canvas.height);
    }
}

/* 그림 저장하기 */
saveButton.addEventListener("click", savePicture);

function savePicture() {
    const image = canvas.toDataURL();
    const link = document.createElement("a");
    link.href = image;
    link.download = "PaintJS[🖌]";
    link.click();
}