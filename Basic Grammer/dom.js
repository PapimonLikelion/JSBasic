//JS는 html 태그들을 객체들로 변환
//배울 함수들은 DOM 형태로 변경 가능

// const title = document.getElementById("title");
const title = document.querySelector("#title");
title.innerHTML = "HI HI JS";
title.style.color = "coral";
document.title = "I can also change this";
console.log(title);