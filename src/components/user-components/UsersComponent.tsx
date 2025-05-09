import {useAppSelector} from "../../redux/hooks/userAppSelector.ts";
import {useEffect} from "react";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {userSliceAction} from "../../redux/user-slice/userSlice.tsx";
import UserComponent from "./UserComponent.tsx";


const UsersComponent = () => {
    const {users} = useAppSelector(state => state.userSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(userSliceAction.loadUsers())
    }, [dispatch]);
    return (
        <div>
            {
                users.map(user => (<UserComponent key={user.id} item={user}/>))
            }
        </div>
    );
}

export default UsersComponent;