import {FC, memo} from "react";


const UserComponent:FC<{foo: () => void, arr: number[]}> = memo(({arr}) => {
    console.log('User')
    console.log(arr)
    return (
        <div>
            UserComponent
        </div>
    );
});

export default UserComponent;