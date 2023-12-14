console.log('step1.js 열림');

//================= 함수 밖에 선언 ================ //
    //여럿 함수들{}에서 사용하기 떄문에. // 선언 1번하고 누적저장

//1. 아이디 저장하는 배열
const idArray = [];
//2. 패스워드 저장하는 배열 
const pwArray = [];

//================= 1. 회원가입 함수 ================ //
function 회원가입(){ // f start //선언부 // 실행조건 : 가입버튼을 클릭했을 때
    console.log('회원가입 버튼 함수')
    //1.[입력]
    const signId = document.querySelector('#signId').value;
    const signPw = document.querySelector('#signPw').value;

    //2.[처리] 배열명.push (추가할 요소)
    idArray.push (signId); //
    pwArray.push (signPw); // 아이디와 패스워드 인덱스 동일하게.

    //3.[출력]
    alert('회원가입이 되었습니다.');
        //성공 후 해당 input value 값 초기화
    document.querySelector('#signId').value= ''
    document.querySelector('#signPw').value= ''
} // f end

//================= 2. 로그인 함수 ================ //
function 로그인(){ // f start //선언부 // 실행조건 : 로그인버튼을 클릭했을 떄
    console.log('로그인 버튼 함수');
    //1.[입력] 
    const loginId = document.querySelector('#loginId').value;
    const loginPw = document.querySelector('#loginPw').value;


    //2.[처리] 배열명.indexOf(값)
    const sIndex = idArray.indexOf(loginId);
    if(sIndex >=0 && pwArray[sIndex] ==loginPw ){
        //1. 만약에 입력받은 로그인 아이디가 배열내 존재하면
        //2. 찾은 아이디 인덱스의 패스워드도 동일한지.
        //3.[출력]
        alert('로그인 성공');
    }else {
        alert('동일한 회원정보가 없습니다.')
    } 


}// f end

/*
    
*/