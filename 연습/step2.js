console.log('js출력')

const 카테고리목록 = [
                        {cno: 1, 카테고리 : '디카페인'},
                        {cno: 2, 카테고리 : '커피'},
                        {cno: 3, 카테고리 : '논커피'},
                        {cno: 4, 카테고리 : '디저트'},
                        {cno: 5, 카테고리 : '티'}
                    ];
const 제품메뉴 = [
                { pno : 1, 이름 : '초코라떼', 가격 : '1600원', cno: 1,},
                { pno : 2, 이름 : '콩가루라떼', 가격 : '2300원', cno: 1,},
                { pno : 3, 이름 : '아메리카노', 가격 : '1600원', cno: 2,},
                { pno : 4, 이름 : '바나나라떼', 가격 : '3000원', cno: 2,},
                { pno : 5, 이름 : '고구마라떼', 가격 : '5000원', cno: 3,},
                { pno : 6, 이름 : '초코브라운', 가격 : '4800원', cno: 4,},
                { pno : 7, 이름 : '핫도그', 가격 : '5000원', cno: 4,},
                { pno : 8, 이름 : '유자차', 가격 : '4500원', cno: 5,},
                { pno : 9, 이름 : '밀크티', 가격 : '4500원', cno: 5,},
                { pno : 10, 이름 : '생강차', 가격 : '3000원', cno: 5,}
                ];
카테고리출력();
function 카테고리출력(selectCno){
 // 1. 어디에
    let 카테고리출력구역 = document.querySelector('#카테고리출력구역')
 // 2. 무엇을
    let html ='';
    console.log(html)
        for(let i = 0; i<카테고리목록.length ; i++) {
            html += `
                    <span style="margin:10px" onclick="제품메뉴출력(${카테고리목록[i].cno})">
                        ${카테고리목록[i].카테고리} </span>
            `
        }
    // 3. 출력
    카테고리출력구역.innerHTML = html;
    제품메뉴출력(selectCno)
}

function 제품메뉴출력(selectCno) {
    // 1. 어디에
    let 제품메뉴출력구역 = document.querySelector('#제품메뉴출력구역')
    // 2. 무엇을
    let html = '';
        for( let i = 0 ; i<제품메뉴.length ; i++ ){ 
            if( 제품메뉴[i].cno == selectCno){
                    html += `
                    <span style="margin:10px" ">${ 제품메뉴[i].이름 }</span>
                    `
            }// if end
        } // 1 for end
    // 3. 출력
    제품메뉴출력구역.innerHTML = html;
} //fun end

// - [함수3] 제품선택시 장바구니에 담아주는 함수. (실행조건 : 제품을 클릭했을 떄)
function setCart(){ // - 함수선언

}