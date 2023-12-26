모든글출력()
      
function 모든글출력(){
    const boardArray = JSON.parse( localStorage.getItem('boardArray') ); // 저장된 값 가져오기
    const tableBody = document.querySelector('table > tbody'); 

    let html = ``;
    for(let i=0; i<boardArray.length; i++){ 

      
        html += `<tr onclick="개별글출력(${i})">
                    <th>${i}</th>
                    <th>${boardArray[i].제목}</th>
                    <th>${boardArray[i].작성자}</th>
                    <th>${boardArray[i].조회수}</th>
                 </tr>`
    }
    tableBody.innerHTML = html;

    return;
} 