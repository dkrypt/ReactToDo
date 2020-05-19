import { action } from 'easy-peasy';

export default {
    todos: [
        
    ],
    removeTodo: action((state, id) => {
        const todoToDel = state.todos.find(todo => todo.id == id);
        const index = state.todos.indexOf(todoToDel);
        state.todos.splice(index, 1);
    }),
    addTodo: action((state, todo) => {
        state.todos.push(todo);
    }),
    markComplete: action((state, id) => {
        const el = state.todos.find(todo => todo.id == id);
        const index = state.todos.indexOf(el);
        state.todos[index].done = !state.todos[index].done;
    })
}