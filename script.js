// LIST OF STARTING TODOS
let todos = [
    {
      "id": 0,
      "text": "Renew Membership",
      "status": "Pending"
    },
    {
        "id": 1,
        "text": "Gas Car",
        "status": "Completed"
      },
      {
        "id": 2,
        "text": "Finish Homework",
        "status": "Pending"
      },
]

// START CREATING VARIABLES
let addTodoBar = document.getElementById('input')
let clrBtn = document.getElementById('clear-btn')
let todoList = document.getElementById('task-box')




// TAKES USER VALUE AND ADDS A NEW TODO
addTodoBar.addEventListener('keyup', e => {
    let userTask = addTodoBar.value;
    if(e.key == "Enter" && userTask) {
        todos.push({'id': todos.length, 'text': userTask, 'status': 'Pending'})
        displayTodos()
    }
    
})



//LETS USER DELETE CHECKED TODOS ----- NEEDS WORK STILL
clrBtn.addEventListener('click', () => {
    todos.forEach(todo => {
        if (todo.status == "Completed") {
            todos.splice(todo.id, 1)
        }
    })
    displayTodos()
})



//Handles the checking of the boxes
window.addEventListener('load', () => {
    let checkBoxes = document.getElementsByClassName('checkbox')
    const copy = Array.from(checkBoxes);
    
    console.log(copy)

    copy.forEach(element => {
        element.addEventListener('click', () => {
                console.log(element.id)
                let checkedBox = element.id
                let addClassCheck = todos.filter(todo => todo.id == checkedBox)

                let finishClass = addClassCheck[0]
                console.log(finishClass)
                // So far we are getting the element when clicked on the check box, however we are not able to add the class yet -- throwing an error
        })
    });
})

//Handles the single delete of the box
window.addEventListener('load', () => {
    let singleDelete = document.getElementsByClassName('uil-trash')
    
    const copy1 = Array.from(singleDelete);
    
    console.log(copy1)

    copy1.forEach(element => {
        element.addEventListener('click', () => {
                console.log(element.id)
                let deletedBox = element.id
                todos.splice(deletedBox, 1)
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



