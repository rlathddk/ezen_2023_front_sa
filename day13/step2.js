/* JS 과제 [주차장 정산기]
   요구사항
   1. 입차
      1. 차번호 입력받기 숫자 4자리로 입력받기 (input type="text")
      2. 입차시간을 type="time"으로 입력 받기
   2.저장
      배열[차번호 따로, 입차 시간 따로]에 저장
===============================================================
   3.출차
      1.차번호 숫자4자리 입력받기 type = "text"
   4.요금계산
      1.출차시간을 type="time"
      2.해당 차번호의 입차시간과 출차시간을 계산해서.
      30분 내외면 무료
      30분 이상이면 10분당 1000원
   5. 출력
      alert(요금)
      또는
      alert(입차한 차량이 없습니다.)
==================추가 요구 사항 ========================

   1. 입차/출차시 차량번호 4자리만 입력할 수 있도록 하고 아니면 입차 불가능.
   2. 입차/출차 시간을 입력 안했으면 입차/출차 불가능.
   3. 일별 매출 현황 HTML에 출력하기
   4. CSS 간단하게. */ 


console.log('stpe2.js 출력')

const carArray = [];
const timeArray = [];
const moneyArray= [];

function 입차(){ // f start

    //1. [입력]
   const carNumber = document.querySelector('#carNumber').value;
   const carTime = document.querySelector('#carTime').value;


    //2. [처리]
    if(carNumber.length != 4) {alert('차량번호 4자리 입력해주세요.')
    return;}
    if(carTime==""){alert('입차시간을 입력하세요'); return;}
    else {alert('입차가 완료되었습니다.')}

    carArray.push(carNumber)
    timeArray.push(carTime)


    //3. [출력]
    document.querySelector('#carNumber').value= ''
    document.querySelector('#carTime').value= ''
} // f end


function 출차(){
    const carNumOut = document.querySelector('#carNumOut').value
        //콘솔
    const carDateOut = document.querySelector('#carDateOut').value
        //콘솔
    const carIndex = carArray.indexOf(carNumOut)
  
  
    /* 주차요금 */
    const 주차시간 = String(timeArray[carIndex]).split(':')
    const 주차시간1 = 주차시간[0]*60 + 주차시간[1]*1
    const 출차시간 = String(carDateOut).split(':')
    const 출차시간1 = 출차시간[0]*60 + 출차시간[1]*1 /* 나눠서 분 단위로 계산 */
    
    const 총주차시간 = 출차시간1-주차시간1
  
    if(carNumOut.length != 4) {alert('차량번호는 4자리만 입력해주세요.'); return;}
    if(carDateOut==""){alert('출차시간을 입력하세요'); return;}
  
    if(총주차시간<0){alert('출차시간이 더 적을 수 없습니다.'); return;}

    if(총주차시간<=30){
     alert('무료입니다.');
    return;}
  
     const 주차요금 = (((총주차시간)-30)/10)-parseInt(((총주차시간)-30)/10)>0 ? parseInt(((총주차시간)-30)/10)*1000+1000 : (((총주차시간)-30)/10)*1000
   // 
    
    if(carIndex>=0){ 
     alert(`주차요금은 ${주차요금}원 입니다`)
    }else{
     alert('입차한 차량이 없습니다.');return;}
  
    document.querySelector('#carNumOut').value= ''
    document.querySelector('#carDateOut').value= ''
     

  }
  
  