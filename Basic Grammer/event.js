//JS는 이벤트에 반응할 수 있다
//click, resize, submit, closing...
const pageTitle = document.querySelector('#title');

function handleResize(event) {
    console.log("resize~!");
    console.log(event);
}

//handleResize   - 필요할 때 호출 
//handleResize() - 자동 바로 호출
window.addEventListener("resize", handleResize);

var temp = 0;

handleClick = () => { 
    if (temp % 2 == 0 ) {
        pageTitle.style.color = "coral";
    } else {
        pageTitle.style.color = "blue";
    }
    console.log(temp);
    temp++;
};

pageTitle.addEventListener("click", handleClick);
