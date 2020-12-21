const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

//1번. 문제 - 기존 태그의 클래스 존중이 없다
function titleClickEvent() {
    const currentClass = title.className;
    if (currentClass !== CLICKED_CLASS) {
        title.className = CLICKED_CLASS;
    } else {
        title.className = null;
    }
}

//2번. classList의 메서드들을 사용하여 제어
function titleClickEvent() {
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if (hasClass) {
        title.classList.remove(CLICKED_CLASS);
    } else {
        title.classList.add(CLICKED_CLASS);
    }
}

//3번. classList의 toggle로 기능 구현
function titleClickEvent() {
   title.classList.toggle(CLICKED_CLASS);
}

title.addEventListener("click", titleClickEvent);