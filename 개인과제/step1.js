console.log('js출력')

const 카테고리목록 = [
                        {cno: 1, 카테고리 : '디카페인'},
                        {cno: 2, 카테고리 : '커피'},
                        {cno: 3, 카테고리 : '논커피'},
                        {cno: 4, 카테고리 : '디저트'},
                        {cno: 5, 카테고리 : '티'}
                    ];
const 제품메뉴 = [
                { pno : 1, 이름 : '콜드브루', 가격 : '1600원', cno: 1, 이미지 : '디카페인1.png'},
                { pno : 3, 이름 : '아이스아메리카노', 가격 : '5000원', cno: 2, 이미지 : '커피1.png'},
                { pno : 4, 이름 : '바나나라떼', 가격 : '3000원', cno: 2, 이미지 : '커피2.png'},
                { pno : 5, 이름 : '고구마라떼', 가격 : '5000원', cno: 3, 이미지 : '논커피1.png'},
                { pno : 6, 이름 : '초코브라운', 가격 : '4800원', cno: 4, 이미지 : '논커피2.png'},
                { pno : 7, 이름 : '핫도그', 가격 : '5000원', cno: 4, 이미지 : '디저트1.png'},
                { pno : 8, 이름 : '유자차', 가격 : '4500원', cno: 4, 이미지 : '디저트2.png'},
                { pno : 9, 이름 : '밀크티', 가격 : '4500원', cno: 5, 이미지 : '티1.png'},
                ];


// [함수1] : 카테고리 출력 함수
카테고리출력(1)
function 카테고리출력(selectCno){ // 매개변수? 이해안됨 
 // 1. 어디에
    const categoryUl = document.querySelector('#header>ul')
 // 2. 무엇을
    let html ='';
        for(let i = 0; i<카테고리목록.length ; i++) {
            html += `
                    <li onclick="제품메뉴출력(${카테고리목록[i].cno})"  
                    class="${카테고리목록[i].cno == selectCno ? 'selectMenu': ''}">
                    ${카테고리목록[i].카테고리}
                    </li>
                    `
        }
    // 3. 출력
    categoryUl.innerHTML = html;

    제품메뉴출력(selectCno)
}

// [함수2] : 제품메뉴 출력 함수


function 제품메뉴출력(selectCno) {
    // 1. 어디에
    let 제품메뉴출력구역 = document.querySelector('#productBox')
    // 2. 무엇을
    let html = '';
        for( let i = 0 ; i<제품메뉴.length ; i++ ){ 
            if( 제품메뉴[i].cno == selectCno){
                    html += `
                        <div onclick="" class="product">
                            <img src="img/${제품메뉴[i].이미지}" alt="">
                            <div class="pinfo">
                                <div class="pname">${제품메뉴[i].이름}</div> 
                                <div class="pprice">${제품메뉴[i].가격}</div>
                            </div>
                        </div>
                    `
            }// if end
        } // 1 for end
    // 3. 출력
    
    productBox.innerHTML = html;

} //fun end
