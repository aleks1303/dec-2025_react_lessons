import {useAppSelector} from "../../redux/hooks/userAppSelector.ts";
import {useEffect} from "react";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {userSliceAction} from "../../redux/user-slice/userSlice.tsx";


const UsersComponent = () => {
    const {users} = useAppSelector(({userSlice}) => state);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(userSliceAction.loadUsers(users))
    }, []);
    return (
        <div>
            {}
        </div>
    );
}

export default UsersComponent;