console.log('js출력')

const 카테고리목록 = [
                        {cno: 1, 카테고리 : '디카페인'},
                        {cno: 2, 카테고리 : '커피'},
                        {cno: 3, 카테고리 : '논커피'},
                        {cno: 4, 카테고리 : '디저트'},
                        {cno: 5, 카테고리 : '티'}
                    ];
const 제품메뉴 = [
                { pno : 1, 이름 : '콜드브루', 가격 : 1600, cno: 1, 이미지 : '디카페인1.png'},
                { pno : 3, 이름 : '아이스아메리카노', 가격 : 5000, cno: 2, 이미지 : '커피1.png'},
                { pno : 4, 이름 : '바나나라떼', 가격 : 3000, cno: 2, 이미지 : '커피2.png'},
                { pno : 5, 이름 : '고구마라떼', 가격 : 5000, cno: 3, 이미지 : '논커피1.png'},
                { pno : 6, 이름 : '초코브라운', 가격 : 4800, cno: 4, 이미지 : '논커피2.png'},
                { pno : 7, 이름 : '핫도그', 가격 : 5000, cno: 4, 이미지 : '디저트1.png'},
                { pno : 8, 이름 : '유자차', 가격 : 4500, cno: 4, 이미지 : '디저트2.png'},
                { pno : 9, 이름 : '밀크티', 가격 : 4500, cno: 5, 이미지 : '티1.png'},
                ];
const 장바구니목록 = [];

카테고리출력(1) // 처음 호출 시 매개변수 cno 값 1로 가정
function 카테고리출력(selectCno){ //카테고리함수선언 왜? css 변동 때문에 여러번 출력할꺼라서 // 매개변수 : (내가 선택한 카테고리번호)함수안으로 들어온 변수 // 지역변수임=> 전역변수로 선언해도 됨
    // 1. 어디에
        let headerUl = document.querySelector('#header>ul')
    // 2. 무엇을
        let html = ''
            for(let i = 0; i<카테고리목록.length; i++){            // ↙ 호출(매개변수)
                html+= `<li onclick="카테고리출력(${카테고리목록[i].cno})" 
                class="${selectCno == 카테고리목록[i].cno ? 'selectMenu' : ''}">
                ${카테고리목록[i].카테고리}</li>`
            }
    // 3. 출력
    headerUl.innerHTML= html
    제품출력(selectCno)
}

function 제품출력(selectCno){
    // 1. 어디에
    let productBox = document.querySelector("#productBox")

    // 2. 무엇을
    let html = '' 
        for(let i = 0; i<제품메뉴.length; i++){
            if(selectCno==제품메뉴[i].cno){
            html+= `<div class="product" onclick="장바구니선택(${제품메뉴[i].pno})">
                        <img src="img/${제품메뉴[i].이미지}" alt="">
                        <div class="pinfo">
                            <div class="pname">${제품메뉴[i].이름}</div> 
                            <div class="pprice">${제품메뉴[i].가격}원</div>
                        </div>
                    </div>`
                }
        }
    // 3. 출력
    productBox.innerHTML= html

}

function 장바구니선택(selectPno) {

    장바구니목록.push(selectPno)
   
    // 새로고침
    장바구니출력()
}
function 장바구니삭제(deleteIndex) {
    console.log(deleteIndex)
    장바구니목록.splice (deleteIndex, 1) // slice xx splice oo

     // 새로고침
    장바구니출력()
}

function 장바구니출력() {

 // 1. 어디에
 const cartBottom = document.querySelector('#cartBottom')
 // 2. 무엇을
  
 let html = ''
 let totalprice = 0; // '' <- 문자열로 했다가 누적안됨
 let count = 장바구니목록.length;
     for(let i = 0; i < 장바구니목록.length; i++){
         for(let j = 0; j < 제품메뉴.length; j++){
             if (장바구니목록[i] == 제품메뉴[j].pno) {
                 html += `<div class="citem">
                             <div>${ 제품메뉴[j].이름 } </div>
                             <div>${ 제품메뉴[j].가격.toLocaleString()}원</div>
                             <span onclick="장바구니삭제( ${ i } )">X</span>
                         </div>`
                 totalprice += 제품메뉴[j].가격 ;
             } // if end
             
         } // 2 for end
     } // 1 for end
 // 3. 출력
 cartBottom.innerHTML = html
 document.querySelector("#total").innerHTML = totalprice.toLocaleString()+'원'
 document.querySelector("#count").innerHTML = count;
}
