let todos = [
    
]

let addTodoBar = document.getElementById('input')
let clrBtn = document.getElementById('clear-btn')
let todoList = document.getElementById('task-box')

addTodoBar.addEventListener('keyup', e => {
    let userTask = addTodoBar.value;
    if(e.key == "Enter" && userTask) {
        console.log(userTask)
    }
})