import {ITodos} from "../../models/ITodos.ts";
import {FC} from "react";

type MyPropsTodo = {
    todo: ITodos
}

const TodoComponent: FC<MyPropsTodo> = ({todo}) => {
    return (
        <div className={'flex'}>
            <h4 className={'flex-1/7 border-1 pl-5'}>id:{todo.id}, userId:{todo.userId}</h4>
            <p className={'flex-3/4 border-1 pl-5'}>to do: {todo.todo}</p>
        </div>
    );
};

export default TodoComponent;