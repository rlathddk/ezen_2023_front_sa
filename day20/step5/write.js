const boardArray = [] 


// 1. 글쓰기
function 글쓰기(){
    // 1. HTML로 부터 입력받은 값 가져오기
    const writer = document.querySelector('#writer').value;
    const password = document.querySelector('#password').value;
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;


    const board = {작성자 : writer, 비밀번호 : password, 제목 : title, 내용 : content}
    board.조회수 = 0;

        // 기존 배열 호출
        let boardArray = JSON.parse( localStorage.getItem('boardArray')  )   
     
        if( boardArray == null ){ boardArray = [] }   // 배열을 새로 만들어준다.
        else{boardArray.push( board )}; // 방금 작성된 글 배열에 추가
        localStorage.setItem('boardArray', JSON.stringify( boardArray ) );


    // 3. 배열에 HTML 출력하기

    // 초기화
    document.querySelector('#writer').value ='';
    document.querySelector('#password').value = '';
    document.querySelector('#title').value = '';
    document.querySelector('#content').value = '';

    return; // 함수종료 // 해도되고 안해도 되고
} 