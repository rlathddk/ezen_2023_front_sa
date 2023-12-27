// p.331 키도브 이벤트 

// 1. HTML 내용이 모두 로드 되었을 때
document.addEventListener('DOMContentLoaded', function(){

    const textarea = document.querySelector('textarea');
    const h1 = document.querySelector('h1')

    // 3. textarea 요소의 이벤트 등록
    textarea.addEventListener('keydown', function(e){
        console.log(e) //// * event : 매개변수로 이벤트의 정보를 받습니다.
        console.log(e.code) //// 입력한 키의 문자열 표시                                                      
        console.log(e.keyCode) //// 입력한 키의 숫자로 표시
        console.log(e.altKey) //// [조합키] alt 눌렀는지 ?
        console.log(e.ctrlKey) //// [조합키] ctrl 눌렀는지 ?
        console.log(e.shifKey) //// [조합키] shift 눌렀는지 ?
  
    // 4. 글자수
    const length = textarea.value.length
    h1.textContent = `글자 수 : ${length}`
});
    // [p.333]
    // 1. 별 기본 설정
    const star = document.querySelector('h2');
    star.style.position = 'absolute'; // css절대위치

    let x = 0; // 가로위치
    let y = 0; // 세로위치
    const block = 20 // 이동단위

    // 2. 별 위치를 그려주는 함수
    const print = function(){
        star.style.left = `${x*block}px`
        star.style.top = `${y*block}px`
    };
    print();

    // 3. 별 위치를 이동하는 이벤트
        // 3-1 키보드 방향키의 키번호
        
    const left = 37;
    const up = 38;
    const right = 39;
    const down = 40;

    document.body.addEventListener('keydown', function(e){
        // 3-2 body(전체)에서 키를 눌렀을 때 이벤트 발생 
        console.log(e)
        if(e.keyCode == left){x--;}
        else if(e.keyCode == up){y--;}
        else if(e.keyCode == right){x++;}
        else if(e.keyCode == down){y++;}
        else{}
        print()
    });
});