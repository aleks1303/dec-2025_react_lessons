import {useEffect, useState} from "react";
import {ITodos} from "../../models/ITodos.ts";
import TodoComponent from "./TodoComponent.tsx";
import {getDummyTodos} from "../../services/api.fetch-dummy.ts";


const TodosComponent = () => {
    const [todos, setTodos] = useState<ITodos[]>([])
    useEffect(() => {
        getDummyTodos()
            .then((response) => {
                setTodos(response)
            });
    }, []);
    return (
        <>
            {
                todos.map(todo => (<TodoComponent key={todo.id} todo={todo}/>))
            }
        </>
    );
};

export default TodosComponent;