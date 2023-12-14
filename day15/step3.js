console.log('js열림')
// 전역 자료 [함수밖에서 선언]
const 할일목록 = [] ; // 할일의 내용을 저장
const 상태목록 = [] ; // 할일의 상태를 저장


// 지역 자료 [함수안에서 선언]


//1. 등록 함수 : 매개변수, 리턴값
function 등록함수(){
    console.log('등록함수() 실행')
} // f end


//2. 변경 함수 : 매개변수, 리턴값
function 변경함수(){
    console.log('변경함수() 실행')
} // f end


//3. 삭제 함수 : 매개변수, 리턴값
function 삭제함수(){
    console.log('삭제함수() 실행')
} // f end
