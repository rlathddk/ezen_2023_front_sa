console.log('js열림')

const dateArray = [];
const listArray = [];
const moneyArray = [];

function 등록함수(){
    console.log('등록함수() 실행')
    // [1. 입력]
    let date = document.querySelector('#date').value;
    let list = document.querySelector('#list').value;
    let money = document.querySelector('#money').value;


    // [2. 처리]
    dateArray.push(date);
    dateArray.push(list);
    dateArray.push(money);
    console.log(date);
    console.log(list); 
    console.log(money)

    // [3. 출력]
    document.querySelector('#date').value = ``; 
    document.querySelector('#list').value = ``; 
    document.querySelector('#money').value = ``; alert('등록 성공');

    출력함수();

}

function 삭제함수(삭제인덱스){
    console.log('삭제인덱스() 실행' + 삭제인덱스);


    // [1. 입력

    // [2. 처리]
    dateArray.spilce(삭제인덱스, 1);
    listArray.spilce(삭제인덱스, 1);
    moneyArray.spilce(삭제인덱스, 1);

    // [3. 출력]
    출력함수();


}
function 출력함수(){
    // 어디에
    const Bottom = document.querySelector('#Bottom');

    let html = '';
    // 배열 꺼내기
    for(let i=0; i<dateArray.length; i++){
        html += ` <div class="dateIn">
                    <p>${dateArray[i]}</p>
                    <p>${listArray[i]}</p>
                    <p>${moneyArray[i]}</p>
                    <p><button onclick="삭제함수(${i})" value="삭제">삭제</button></p>
                </div>`
    }

  // 3. [대입]
  Bottom.innerHTML = html;
}