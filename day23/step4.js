
// [p.346]

document.addEventListener('DOMContentLoaded', function(){

    // 1.
    let timer = 0
    let timerId = 0;

    // 2. 
    const h1 = document.querySelector('h1');
    const checkbox = document.querySelector('input');

    // 3. 체크박스의 이벤트 등록
    checkbox.addEventListener('change', function(event){
        console.log(checkbox.checked);
        
        if(event.currentTarget.checked){// 체크 된 상태
            timerId = setInterval(function(){
                timer ++; // 타이머 값을 1증가
                h1.textContent = `${timer}초`
            }, 1000)
        }else { // 체크 해제 상태
            clearInterval(timerId);
        }
}); // e end
    // [p.348]
    const output = document.querySelector('#output')
    const radios = document.querySelectorAll('[name=pet]')
  

    for( let i = 0; i < radios.length; i++){
        radios[i].addEventListener('change', function(event){
            
            // [방법1]
            const current = event.currentTarget
            
            if(current.checked){
                output.textContent = `좋아하는 애완동물은 ${current.value}이군요.`
            }
            // [방법2]
            const checkValue = document.querySelector('input[name="pet"]:checked').value;
            output.textContent = `좋아하는 애완동물은 ${checkValue}이군요.`
            
        })
    }
    
}); // e end