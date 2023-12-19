console.log( 'js열림');


const 날짜목록 = []
const 항목목록 = []
const 금액목록 = []

// 등록함수
function 등록함수(){
    날짜목록.push(document.querySelector("#date").value);
    항목목록.push(document.querySelector("#list").value);
    금액목록.push(document.querySelector("#money").value);
    
    alert('등록이 완료되었습니다.')

    //출력
    출력함수();

}

//삭제함수
function 삭제함수(삭제할인덱스){
    날짜목록.splice(삭제할인덱스, 1);
    항목목록.splice(삭제할인덱스, 1);
    금액목록.splice(삭제할인덱스, 1);

    //출력
    출력함수();
}


//출력함수
function 출력함수(){
    
    let html= '';
    let sum = Number('');
    
    for(let i=0 ;i < 날짜목록.length; i++){

    html += `<div id="date_box_inner">
                <p>${날짜목록[i]}</p>
                <p>${항목목록[i]}</p>
                <p>${금액목록[i]}</p>
                <p><button onclick="삭제함수(${i})" value="삭제">삭제</button></p>
            </div>`
            sum += Number(금액목록[i]);
          
        //대입할 곳
        }
       
    document.querySelector('#date_box').innerHTML= html;
    document.querySelector('#sum').innerHTML= sum;

    //초기화
    document.querySelector('#date').value=''
    document.querySelector('#list').value=''
    document.querySelector('#money').value=''

    }
    // length가 홀수 자리 일 때마다 뒤에 콤마를 찍어준다? 3 6 9