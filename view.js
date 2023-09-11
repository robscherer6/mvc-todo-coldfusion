// Contains functions for rendering the UI

function createTodoElement(todo, index) {
    const li = document.createElement('li');
    li.classList.add('todo-item');
    if (todo.completed) {
        li.classList.add('completed');
    }
    li.innerHTML = `
        ${todo.text}
        <button class="delete-button" data-index="${index}">Delete</button>
    `;
    return li;
}

function displayTodos(todos) {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const todoElement = createTodoElement(todo, index);
        todoList.appendChild(todoElement);
    });
}

export { displayTodos };