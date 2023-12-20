console.log( 'js열림');


const boardArray = []



// 1. 등록 함수 선언
function 등록함수(){ console.log('등록함수() 실행');
    //[1.입력] 
    const 이름 = document.querySelector('#이름').value; 
    const 팔굽혀펴기 = document.querySelector('#팔굽혀펴기').value;
    const 윗몸일으키기 = document.querySelector('#윗몸일으키기').value;
    const 턱걸이 = document.querySelector('#턱걸이').value; 

    const nIndex = boardArray.findIndex(i => i.이름 == 이름);  // 배열이름 비교 
    //이름 중복 검사 후 -1 true 시 회원등록 , 아닐시 이미 등록된 회원 안내

    const namebin = ''; // 이름이 빈칸인지 비교 상수

    if(!(이름 == namebin)){     // 빈칸이 입력 됬는지 비교
        
        //이름 중복 검사 후 -1 true 시 회원등록 , 아닐시 이미 등록된 회원 안내
        if(nIndex == -1){       // 이름이 같은지 비교
            //[2.처리] 
        const board = {이름 : 이름, 팔굽혀펴기 : 팔굽혀펴기, 윗몸일으키기 : 윗몸일으키기, 턱걸이: 턱걸이}
        boardArray.push (board);
        alert('등록 성공');
        }else{
            alert("이미 등록된 회원입니다.")
        }
        
    }else{
        alert("이름을 입력해 주세요!")
    }
     //[3.출력]

    출력함수();
}
/* 등급*/



function 등급(a){

let result = ""
let 총점 = Number(boardArray[a].팔굽혀펴기)+Number(boardArray[a].윗몸일으키기)+Number(boardArray[a].턱걸이)

if (총점 >=130) {result= "A"}
else if (총점 >=120) {result= "B"}
else if (총점 >=110) {result= "C"}
else if (총점 >=100) {result= "D"}
else {result= "재시험"}


return result;

};
// 삭제함수

function 삭제함수( 삭제할인덱스 ){      //f start
    console.log("삭제함수실행");

    boardArray.splice(삭제할인덱스 , 1);

    출력함수()

}   //f end

// 수정함수 시작
function 수정함수(){    // 수정
    console.log("수정함수 실행")
    // 입력
    let 수정이름 = document.querySelector('#이름').value
    let 팔굽혀펴기 = document.querySelector('#팔굽혀펴기').value
    let 윗몸일으키기 = document.querySelector('#윗몸일으키기').value
    let 턱걸이 = document.querySelector('#턱걸이').value
      // 배열에서 indexOf 사용 안되어 findIndex 사용
      const nIndex = boardArray.findIndex(i => i.이름 == 이름); 
    
    console.log( 수정이름 );
    console.log(nIndex);    // 값 확인 테스트
    if(nIndex >= 0){        // 똑같은 이름이 없으면 -1  있으면 해당 인덱스값 
        alert("수정되었습니다.")    // 수정 완료 메세지

        if(!(팔굽혀펴기 == '')){    // 팔굽혀펴기 값 수정
            boardArray[nIndex] = 팔굽혀펴기;
        }else{
            boardArray[nIndex] = boardArray[nIndex]
        }

        if(!(윗몸일으키기 == '')){  // 윗몸일으키기 값 수정
            boardArray[nIndex] = 윗몸일으키기;
        }else{
            boardArray[nIndex] = boardArray[nIndex]
        }

        if(!(턱걸이 == '')){        // 턱걸이 값 수정
            boardArray[nIndex] = 턱걸이;
        }else{
            boardArray[nIndex] = boardArray[nIndex]
        }
        출력함수()  //출력

    }else{  // 같은 이름이 없으면
        alert("이름이 없습니다.")

        출력함수()  // 출력
    }
    

} // 수정함수 끝
// 출력함수

function 출력함수(){
    console.log('출력함수실행');
    //const contentOutput = document.querySelector('#contentOutput')
    let html = '';
        for( let i = 0; i<boardArray.length; i++){
            html +=  `<div class="output">        <!-- JS 출력함수() 부분 가이드 -->
                        <div class="name">${boardArray[i].이름}</div>
                        <div class="list_1">${boardArray[i].팔굽혀펴기}개</div>
                        <div class="list_2">${boardArray[i].윗몸일으키기}개</div>
                        <div class="list_3">${boardArray[i].턱걸이}개</div>
                        <div class="total">${Number(boardArray[i].팔굽혀펴기)+Number(boardArray[i].윗몸일으키기)+Number(boardArray[i].턱걸이)}점</div>
                        <div class="grade">${등급(i)}</div>
                        <div class="butn"><input onclick="삭제함수(${i})" type="button" value="삭제"></div>
                    </div>`

    }
    const contentOutput = document.querySelector('#contentOutput')

    contentOutput.innerHTML=html;
    document.querySelector('#이름').value=''
    document.querySelector('#팔굽혀펴기').value=''
    document.querySelector('#윗몸일으키기').value=''
    document.querySelector('#턱걸이').value=''
}

