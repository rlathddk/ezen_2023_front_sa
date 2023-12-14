

let output=``;

// const value1 = Number (prompt('문제1 수 입력;'));
// for(let i =1; i<=value1; i++){
//     // - i는 1부터 입력받은 수까지 1씩 증가
//     output += '*';
// } // for end
// console.log(output);

// // 문제2
// output= ``; // - 문제가 변경되었기 때문에 출력할 내용 공백으로 수정
// const value2 = Number(prompt('문제2 수 입력'));
// for(let i = 1; i<=value2 ; i++){
//     output += '*'
//     //만약에 i가 3배수이면 줄바꿈 처리
//     if(i%3 == 0){output +=`\n`;} // \n : 제어(이스케이프)문자
// }
// console.log(output);

// // 문제3
// output = ``;
// const line3 = Number(prompt('문제3 줄수 : '));
// for(let i = 1 ; i<=line3; i++){// for1 s
    
//     // 별찍기[열]
//     for(let s = 1; s<=i; s++){output += '*';}


//     // 줄바꿈]
//     output += `\n`

// }// for1 end
// console.log(output);

//문제4
// output= ``;
// const line4 = Number(prompt('문제4 줄수 : '));
// for(let i = 1; i<=line4; i++){ // 행

//     //별
//     for(let s = 1; s<=line4-i+1; s++){output +='*';}

//     // 줄바꿈
//     output += '\n'
// }
// console.log(output);

// //문제5
// output= ``;
// const line5 = Number(prompt('문제5 줄수 :'));
// for(let i =1; i<=line5; i++){ // 행

//     // 공백
//     for(let o = 1; o<=line5-i; o++){output +=' ';}

//     // 별
//     for(let s = 1; s<=i; s++){output += `*`}

//     // 줄바꿈
//     output += '\n'
// }
// console.log(output);

// //문제6
// output= ``;
// const line6 = Number(prompt('문제6 줄수 :'));
// for(let i =1; i<=line6; i++){// 행

//     // 공백
//     for(let o = 1; o<=i-1; o++){output +=' ';}

//     // 별
//     for(let s = 1; s<=line6-i+1; s++){output += `*`}

//     // 줄바꿈
//     output += '\n'
// }
// console.log(output);

// //문제7
// output= ``;
// const line7 = Number(prompt('문제7 줄수 :'));
// for(let i =1; i<=line7; i++){//행

//     //공백
//     for(let o = 1; o<=line7-i; o++){output +=' ';}

//     //별
//     for(let s = 1; s<=i*2-1; s++){output += `*`}

//     // 줄바꿈
//     output += '\n'

// }
// console.log(output);

// //문제8
// output= ``;
// const line8 = Number(prompt('문제8 줄수 :'));
// for(let i =1; i<=line8; i++){//행

//     //공백
//     for(let o = 1; o<=i-1; o++){output +=' ';}

//     //별
//     for(let s = 1; s<=(2*(line8-i)+1); s++){output += `*`}

//     // 줄바꿈
//     output += '\n'

// }
// console.log(output);

// 문제9
// output = '';      
// let line9 = Number(prompt('문제9 줄수 입력'));

// // 짝수 
// if(line9%2==0) { //if start
//     line9 = line9/2 
//     //상단
//     for( let i =1 ; i <= line9 ; i++ ){ // 행
//         //공백
//         for( let o = 1 ; o <= line9-i ; o++){
//             output += ' ';
//         }
//         //별
//         for( let s =1; s<=(i*2-1); s++ ){
//             output += '*';
//         }
//         output += '\n'; 
//     }
//     //하단
//     for( let i =1 ; i <= line9 ; i++ ){ // 행
//         //공백
//         for( let o = 1 ; o <= i-1 ; o++){
//             output += ' ';
//         }
//         //별
//         for( let s =1; s<=(2*(line9-i)+1); s++ ){
//             output += '*';
//         }
//         output += '\n'; 
//     }

// }//if end

// // 홀수
// else{line9 = parseInt(line9/2) 
//     //상단
//     for( let i =1 ; i <= line9+1 ; i++ ){ // 행
//         //공백
//         for( let o = line9+1 ; o > i; o--){
//             output += ' ';
//         }
//         //별
//         for( let s =1; s<=(i*2-1); s++ ){
//             output += '*';
//         }
//         output += '\n'; 
//     }
//     //하단
//     for( let i =1 ; i <= line9 ; i++ ){ // 행
//     //공백
//         for( let o = 1 ; o <= i ; o++){
//             output += ' ';
//         }
//         //별
//         for( let s =1; s<=(2*(line9-i)+1); s++ ){
//             output += '*';
//         }
//         output += '\n'; 
//     }
// }//if end

// console.log(output);


// 문제10
// output= ``;
// const line10 = Number(prompt('문제10 줄수 :'));

// //[행] <tr>
//  for(let r =1; r<=line10; r++){//행
//     //[열] <td>
//     for(let c = 1; c<=line10; c++){
//      // [조건 1= 행과 열이 같으면]
//      if(r==c){output += `★`;}
//      // [조건 2 = 행과 열이 더한 값이 입력받은값+1]
//      else if(r+c == line10+1){output +=`★`;}
//      //아니면 공백
//      else{output +=`☆`;}
//     }
        
//      // 줄바꿈
//      output += '\n'

//  } //for end
//  console.log(output);

//문제 10-2
function 문제10(){
// [1. 입력]
const line = Number(document.querySelector('#line10').value);
// [2. 처리]
let html = ``;

// [행]
for(let r = 1; r<=line; r++){

    // 행 시작
    html += `<tr>`;

    // [열]
    for(let c =1; c<=line; c++){
        if(c == r ){html+=`<td>★</td>`}
        else if (c+r == line+1){html += `<td>★</td>`}
        else{html += `<td> </td>`}
    }

    // 줄 끝
    html += `</tr>`;
}
    // [열]

const tableObj = document.querySelector('#table10');
tableObj.innerHTML = html; console.log(tableObj)

}

function 문제9() {
    // [1. 입력]
    const line = Number(document.querySelector('#line9').value);

    // [2. 처리]
    let html = ``;
    
// [행]
for(let r = 1; r<=line; r++){

    // 행 시작
    html += `<tr>`;

    // [열]
    for(let c =1; c<=line; c++){
        if(c == r ){html+=`<td>☆</td>`}
        else if (c+r == line+1){html += `<td>★</td>`}
        else{html += `<td> </td>`}
    }

    // 줄 끝
    html += `</tr>`;
    }
    // [열]

const tableObj = document.querySelector('#table10');
tableObj.innerHTML = html; console.log(tableObj)

}


// 문제10-2
function 문제10(){ // f s
    // [1.입력]
    const line = Number( document.querySelector('#line10').value );
    // [2.처리]
    let html = ``; 
        // [행]
        for( let r = 1 ; r<=line ; r++ ){
            html += `<tr>`; // 행 시작 
            // [열]
            for( let c = 1 ; c<=line; c++ ){
                if( c == r ){ html += `<td>★</td>` }
                else if( c+r == line+1 ){ html += `<td>★</td>` }
                else{ html += `<td> </td>`}
            }
            html += `</tr>`;  // 행 끝
        }
    // [3.출력]
    const tableObj = document.querySelector('#resultTable');
    tableObj.innerHTML = html;
} // f end 

function 문제9_2() {
    let html ='';
    let line9 = Number(document.querySelector('#line9').value);
    
    // 짝수 
    if(line9%2==0) { //if start
        line9 = line9/2 
        //상단
        for( let i =1 ; i <= line9 ; i++ ){ // 행
            html += '<tr>';
            //공백
            for( let o = 1 ; o <= line9-i ; o++){
                html += '<td> </td>';
            }
            //별
            for( let s =1; s<=(i*2-1); s++ ){
                html += '<td>★</td>';
            }
            html += '</tr>';
        }
        //하단
        for( let i =1 ; i <= line9 ; i++ ){ // 행
            html += '<tr>';
            //공백
            for( let o = 1 ; o <= i-1 ; o++){
                html += '<td> </td>';
            }
            //별
            for( let s =1; s<=(2*(line9-i)+1); s++ ){
                html += '<td>★</td>';
            }
            html += '</tr>';
        }
         // [3. 출력 ]
         const tableObj = document.querySelector('#resultTable');
         tableObj.innerHTML = html;
         console.log(tableObj);
    
    }//if end
    
    // 홀수
    else{line9 = parseInt(line9/2) 
        //상단
        for( let i =1 ; i <= line9+1 ; i++ ){ // 행
            html += '<tr>';
            //공백
            for( let o = line9+1 ; o > i; o--){
                html += '<td> </td>';
            }
            //별
            for( let s =1; s<=(i*2-1); s++ ){
                html += '<td>★</td>';
            }
            html += '</tr>'; 
        }
        //하단
        for( let i =1 ; i <= line9 ; i++ ){ // 행
            html += '<tr>';
        //공백
            for( let o = 1 ; o <= i ; o++){
                html += '<td> </td>';
            }
            //별
            for( let s =1; s<=(2*(line9-i)+1); s++ ){
                html += '<td>★</td>';
            }
            html += '</tr>';
        }
        // [3. 출력 ]
        const tableObj = document.querySelector('#resultTable');
        tableObj.innerHTML = html;
        console.log(tableObj);
    }//if end
    }