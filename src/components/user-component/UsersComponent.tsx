import {useEffect} from "react";
import UserComponent from "./UserComponent.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {userSliceActions} from "../../redux/userSlice/userSlice.tsx";


const UsersComponent = () => {
    const {users} = useAppSelector(state => state.userSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
   dispatch(userSliceActions.loadUsers())
    }, [dispatch]);

    return (
        <div>
            {
                users.map(user => (<UserComponent key={user.id} item={user}/>))
            }
        </div>
    );
};

export default UsersComponent;