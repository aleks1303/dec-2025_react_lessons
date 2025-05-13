import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks.tsx";
import {useEffect} from "react";
import {userSliceActions} from "../../redux/slices/userSlice.tsx";
import UserComponent from "./UserComponent.tsx";


const UsersComponent = () => {
    const {users, loading, error} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(userSliceActions.loadUsers())
    }, [dispatch]);

    return (
        <div>
            {loading && <div>Завантаження...</div>}
            {error && <div>Помилка: {error}</div>}
            {users.map(user => (<UserComponent key={user.id} item={user}/>))}
        </div>
    );
};

export default UsersComponent;