import {useAppSelector, userSliceActions} from "../../main.tsx";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getAllUsers} from "../../services/api.service.tsx";


const UsersComponent = () => {
    const {users} = useAppSelector(state => state.userSlice);
    const dispatch = useDispatch();
    useEffect(() => {
    getAllUsers()
            .then(response => {
                dispatch(userSliceActions.loadUsers(response))
            });
    }, [dispatch]);

    return (
        <div>
            {
                users.map(user => (<div key={user.id}>{user.id}. {user.name} {user.username}</div>))
            }
        </div>
    );
};

export default UsersComponent;