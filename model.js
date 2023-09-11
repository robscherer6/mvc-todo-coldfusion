const todos = [];

function addTodo(text) {
    const newTodo = {text, completed: false};
    todos.push(newTodo);
}

function toggleTodoCompletion(index) {
    todos[index].completed = !todos[index].completed;
}

function removeTodo(index) {
    todos.splice(index, 1);
}

function getTodos() {
    return todos;
}

export { addTodo, toggleTodoCompletion, removeTodo, getTodos };