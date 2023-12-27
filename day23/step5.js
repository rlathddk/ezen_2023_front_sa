document.addEventListener('DOMContentLoaded', () =>{

    // 객체 가져오기
    const input = document.querySelector('#todo')
    const todoList = document.querySelector('#todo-list')
    const addButton = document.querySelector('#add-button')

    // 변수선언
    let keyCount = 0;

    // 함수선언
    const addTodo = () => {
        if(input.value.trim() === ''){
            alert('할 일을 입력해주세요.')
            return
        }
    // 문서 객체 설정
    const item = document.createElement('div')
    const checkbox = document.createElement('input')
    const text = document.createElement('span')
    const button = document.createElement('button')

    // 문서 객체 식별할 키 생성
    const key = keyCount
    keyCount += 1

    // item 객체 조작하고 추가
    item.setAttribute('data-key', key)
    item.appendChild(checkbox)
    item.appendChild(text)
    item.appendChild(button)
    todoList.appendChild(item)

    // checkbox 조작
    checkbox.type = 'checkbox'
    checkbox.addEventListener('change', (event) =>{
        item.style.textDecoration
        = event.target.checked ? 'line-through' : ''
    })

    // text 조작
    text.textContent = input.value

    // button 객체를 조작합니다.
    button.textContent = '제거하기'
    button.addEventListener('click', () => {
        removeTodo(key)
    })

    // 내용 비우기
    input.value = ''
    }
    const removeTodo = (key) => {
        const item = document.querySelector(`[data-key="${key}"]`)
        todoList.removeChild(item)
    }

    // 이벤트 연결
    addButton.addEventListener('click', addTodo)
    input.addEventListener('keyup',(event)=>{
        const ENTER = 13
        if(event.keyCode === ENTER){
            addTodo()
        }
    })
})