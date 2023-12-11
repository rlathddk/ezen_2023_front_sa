console.log('js열림') // . js 실행x 
// 1. 파일경로 문제

const 회원배열 = []; 

function 회원등록(){ //f start
     // 1. [입력] : input로 부터 입력받은 값[value] 호출 해서 name상수 저장.
         const name = document.querySelector('#nameInput').value;  

    // 2. [처리]
        if( 회원배열.indexOf( name ) >= 0 ){ alert('현재 등록된 이름입니다.[중복]');    return; }
        if( name.length != 3 ){ alert('회원명 3글자로 입력해주세요.'); return; }
        if( !isNaN(name[0]) || !isNaN(name[1]) || !isNaN(name[2] ) ){ alert('숫자를 입력할수 없어요.'); return;}
    
        회원배열.push( name ); // 입력된 값을 배열에 추가 

    // 3. [출력]
 document.querySelector('#nameList').innerHTML = 회원배열;
 // [ 부가기능1] 등록후 input 상자 초기화 [ input에 value에 빈문자열 넣어주기 ]
 document.querySelector('#nameInput').value ='';
}//f end

function 회원삭제(){ //f start
    console.log('회원삭제 함수');
    // 1.[입력]
    const name = document.querySelector('#nameInput').value;
    // 2.[처리] 삭제 처리 -> 배열 제거
        // 입력한 값이 존재하면 삭제, 없으면 없다고 출력
       let deleteIndex = 회원배열.indexOf(name)
       if( deleteIndex >= 0){ // .indexOf() : 존재하면 0이상의 인덱스위치 반환
            회원배열.splice(deleteIndex, 1); alert('삭제 했습니다.')
        
       }else{ // 없으면 -1
            alert('존재하지 않습니다.')
       }
    // 3.[출력-> 새로고침(배열내 요소가 변경되었으니까,  화면도 다시 출력)] 재 렌더링
        document.querySelector('#nameList').innerHTML = 회원배열;
} // f end

