import {useEffect, useState} from "react";
import {ITodos} from "../../models/ITodos.ts";
import TodoComponent from "../todo-component/TodoComponent.tsx";
import {getTodos} from "../../services/api.fetch.ts";


const TodosComponent = () => {
    const [todos, setTodos] = useState<ITodos[]>([])
    useEffect(() => {
       const fetchTodos = async () => {
           const todos = await getTodos()
           setTodos(todos)
       }
       fetchTodos()
    }, []);
    return (
        <>
            {
                todos.map(todo => <TodoComponent key={todo.id} item={todo}/>)
            }
        </>
    );
};

export default TodosComponent;