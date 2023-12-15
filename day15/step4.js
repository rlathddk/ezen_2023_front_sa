console.log( 'js열림');

const 날짜목록 = [ ]; 
const 항목목록 = [ ]; 
const 금액목록 = [ ]; 

// 1. 등록 함수 선언 
function 등록함수(){ console.log('등록함수() 실행');
    //[1.입력] 
    const date = document.querySelector('#date').value;   console.log( date );
    const list = document.querySelector('#list').value;   console.log( list );
    const money = document.querySelector('#money').value;   console.log( money );
    //[2.처리] 
    날짜목록.push( date );  
    항목목록.push( list ); 
    금액목록.push( money );
    console.log( 날짜목록 ); console.log( 항목목록 );console.log( 금액목록 );
    //
     document.querySelector('#date,#list,#money').value = ``; alert('등록 성공');
    //[3.출력]
    출력함수();
} // f end 


// 2. 삭제 함수
function 삭제함수( 삭제할인덱스 ){
    console.log('삭제함수() 실행' + 삭제할인덱스);
    //[1.입력] X
    //[2.처리] 
    날짜목록.splice( 삭제할인덱스 , 1 );   
    항목목록.splice( 삭제할인덱스 , 1 );  
    금액목록.splice( 삭제할인덱스 , 1 );  
    //[3.출력]
    출력함수();
} // f end 

// 4. 출력 함수 
function 출력함수(){

    // 1.[어디에]
    const date_box = document.querySelector('#date_box');
    // 2.[무엇을] 
    let html = ``;
        for( let i = 0 ; i<날짜목록.length ; i++ ){ 
           
            html += `
                    <div id="date_box_inner">
                        <p>${날짜목록[i]}</p>
                        <p>${항목목록[i]}</p>
                        <p>${금액목록[i]}</p>
                        <input onclick="삭제함수( ${ i } )" type="button" value="삭제">
                    </div>
                    `
        } // f end 
    // 3.[대입]
    date_box.innerHTML=html;
    document.querySelector('#date').value=''
    document.querySelector('#list').value=''
    document.querySelector('#money').value=''

    let sum = Number('');
    for (i = 0; i < 금액목록.length; i++) {
    sum += Number(금액목록[i]);
  
document.querySelector("#sum").innerHTML= sum

}
}

    // 총합계
