# JSBasic
JavaScript를 공부하며 새로 배운 내용을 기록합니다. 
<br>

### 1. 로컬 스토리지 (참고 포스팅: https://www.daleseo.com/js-web-storage/)
- __데이터를 서버에 저장하는 것이 아닌 클라이언트 단, 즉 브라우저 상에 저장!__
  - 데이터가 유실되도 괜찮은 경우에 사용하는 게 좋음
  - 동일한 컴퓨터에서 동일한 브라우저를 쓰는 환경이면 데이터가 남아있다!
  
- __모든 데이터는 문자열로 저장한다.__
  - 따라서 JSON의 직렬화를 통해 문자열 의외의 정보를 저장하는 방식 채택한다. 
  
- __브라우저 종료가 데이터 청소로 이어지지 않아서, 직접 청소해줘야 한다!__
  - removeItem("key"), clear() 등 사용

### 2.fetch API (참고 포스팅: https://ko.javascript.info/fetch)
- __필요한 이유?__
  - 서버에서 추가적인 정보를 비동기적으로 가져올 수 있게 해주는 AJAX 기술의 연장선

- __문법__
  - let promise = fetch(url, [options])
    - url: 접근하고자 하는 URL
    - options: 선택 매개변수, method/header 등 지정
  - 서버에서 응답 헤더를 받자마자 fetch 호출 시 반환받은 promise가 내장 클래스 Response의 인스턴스와 함께 이행 상태가 됩니다.
  
- __활용__
  - await 호출로 fetch 요청하기 
  <br>
    let response = await fetch(url, options);
    let result = await response.json();
    
  - await 호출 없이 fetch 요청하기
  <br>
    fetch(url, options)
      .then(response => response.json())
      .then(result => /* 결과 처리 */)
