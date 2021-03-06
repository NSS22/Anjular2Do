import {Todo} from "./todo";
import {todos} from "./data";

export class TodoService {
    todos: Todo[] = todos;

    getTodos(): Todo[] {
        return this.todos;
    }

    createTodo(title: string) {
        const todo = new Todo(title);
        this.todos.push(todo);
    }

    deleteTodo(todo: Todo) {
        let index =this.todos.indexOf(todo);
        if(index > -1) {
            this.todos.splice(index, 1);
        }
    }

    toggleTodo(todo: Todo) {
        todo.completed = !todo.completed;
    }
}