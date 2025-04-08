import {ITodos} from "../../models/ITodos.ts";
import {FC} from "react";

type MyPropsTodo ={
    item:ITodos
}

const TodoComponent:FC<MyPropsTodo> = ({item}) => {
    return (
        <div className={'border-2 w-50 mb-6 ml-3'}>
            <h2>UserId:{item.userId}, id:{item.id}</h2>
            <h2>title:{item.title}</h2>
        </div>
    );
};

export default TodoComponent;