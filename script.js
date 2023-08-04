// LIST OF STARTING TODOS
let todos = [
    {
      "text": "Renew Membership",
      "status": "Pending"
    },
    {
        "text": "Gas Car",
        "status": "Completed"
      },
      {
        "text": "Finish Homework",
        "status": "Pending"
      },
]
let todosPending =[]
let todosCompleted =[]

// START CREATING VARIABLES
let addTodoBar = document.getElementById('input')
let clrBtn = document.getElementById('clear-btn')
let trashBtn = document.getElementById('trashBtn')
let todoList = document.getElementById('task-box')
let todoListCompleted = document.getElementById('task-box-completed')
let todoListPending = document.getElementById('task-box-pending')


// TAKES USER VALUE AND ADDS A NEW TODO
addTodoBar.addEventListener('keyup', e => {
    let userTask = addTodoBar.value;
    if(e.key == "Enter" && userTask) {
        todos.push({'id': todos.length, 'text': userTask, 'status': 'Pending'})
        displayTodos()
    }
    
})



//LETS USER DELETE CHECKED TODOS
clrBtn.addEventListener('click', () => {
        todos.forEach(todo => {
            if (todo.status == 'Completed') {
                let tobeDeleted = todo.id
                todos.splice(tobeDeleted, 1)
            }
        })
    displayTodos()
})
trashBtn.addEventListener('click', () => {
    todos.forEach(todo => {
        if (todo.status == 'Completed') {
            let tobeDeleted = todo.id
            todos.splice(tobeDeleted, 1)
        }
    })
displayTodos()
})


//Handles the checking of the boxes
window.addEventListener('click', () => {
    let checkBoxes = document.getElementsByClassName('checkbox')
    const copy = Array.from(checkBoxes);

    copy.forEach(element => {
        element.addEventListener('click', () => {
                let checkedBox = element.id
                let addClassCheck = todos.filter(todo => todo.id == checkedBox)

                let finishClass = addClassCheck[0]

                
                if (finishClass.status == "Pending") {
                    finishClass.status = "Completed"
                } else {
                    finishClass.status = "Pending"
                }
                displayTodos()
        })
    });
})


//Handles the single delete of the box
window.addEventListener('click', () => {
    let singleDelete = document.getElementsByClassName('uil-trash')
    const copy1 = Array.from(singleDelete);

    copy1.forEach(element => {
        element.addEventListener('click', () => {
                let newID = copy1.indexOf(element)
                todos.splice(newID, 1)
                console.log(todos)
                displayTodos()
        })
    });
})


//DISPLAYS TODOS
function displayTodos() {
    {
        todoList.innerHTML = ""
        //For each todo
        todos.forEach(todo => {
            //Creating items and adding classes / taking text from added todos
            newTodo = document.createElement("li")
            newTodo.classList.add('task')
        
            newLabel = document.createElement('label')
            let newID = todos.indexOf(todo)
            todo.id = newID
        
            //Checks to see the status when creating Inputs
            newInput = document.createElement('input')
            if (todo.status == "Completed") {
                newInput.type = "checkbox"
                newInput.classList.add('checkbox')
                newInput.id = todo.id
                newInput.checked = true
            } else {
                newInput.type = "checkbox"
                newInput.id = todo.id
                newInput.classList.add('checkbox')
            }

           
        //Checks to see the status when creating Inputs
            newText = document.createElement('p')
            if (todo.status == "Completed") {
                newText.classList.add('todo-text')
                newText.classList.add('selected')
                newText.innerText = todo.text
            } else {
                newText.classList.add('todo-text')
                newText.innerText = todo.text
            }
            
        
            let newDiv = document.createElement('div')
            newDiv.classList.add('settings')
        
            let newI = document.createElement('i')
            newI.classList.add('uil', 'uil-ellipsis-h')
        
            let newUL = document.createElement('ul')
            newUL.classList.add('task-menu')
        
            let newEdit = document.createElement('li')
            newEdit.innerText = "Edit"
        
            let newDelete = document.createElement('li')
            newDelete.innerText = "Delete"
        
            let newEditI = document.createElement('i')
            newEditI.classList.add('uil', 'uil-pen')
        
            let newDeleteI = document.createElement('i')
            newDeleteI.classList.add('uil', 'uil-trash')
        
            //Appending created elements and a little bit of styling
            newEdit.style = "margin: -5px 0 0 5px;"
            newDelete.style = "margin: -5px 0 0 5px;"
            newEditI.append(newEdit)
            newDeleteI.append(newDelete)
            newEditI.style = "display: flex; padding-left: 5px;"
            newDeleteI.style = "display: flex; padding-left: 5px;"
            
            newUL.append(newEditI, newDeleteI)
        
            newDiv.append(newI, newUL)
        
            newLabel.append(newInput, newText)
        
            newTodo.append(newLabel, newDiv)
        
            todoList.append(newTodo)
            

        })
       
    }
}


//Function call to start the display of Todos
displayTodos()



