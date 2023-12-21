모든글출력()
      
function 모든글출력(){// 매개변수 : x // 리턴값 : x
    const boardArray = JSON.parse( localStorage.getItem('boardArray') ); // 저장된 값 가져오기
    const tableBody = document.querySelector('table > tbody'); 

    let html = ``;
    for(let i=0; i<boardArray.length; i++){ // 여러개라서 반복문 // 배열에 있는 모든 요소를 처음부터 끝까지 반복

        // 저장할때 4가지 속성/상태 값들을 "/" 기준으로 하나로 묶었으니깐. 다시 "/" 기준으로 분리[split()]하자
        html += `<tr onclick="개별글출력(${i})">
                    <th>${i}</th>
                    <th>${boardArray[i].제목}</th>
                    <th>${boardArray[i].작성자}</th>
                    <th>${boardArray[i].조회수}</th>
                 </tr>`
    }
1
    tableBody.innerHTML = html;

    return;
} 