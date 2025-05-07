import {useAppSelector, userSliceActions} from "../../stores/store.tsx";
import {useDispatch} from "react-redux";
import {useEffect} from "react";


const UsersComponent = () => {
    const {users} = useAppSelector(state => state.userSlice);
   const dispatch = useDispatch();
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then(response => {
                dispatch(userSliceActions.loadUsers(response))
            });
    }, [dispatch]);
    return (
        <div>
            {
                users.map(user => (<div key={user.id}>{user.id} {user.name}</div>))
            }
        </div>
    );
};

export default UsersComponent;