import {useAppSelector} from "../../redux/hooks/userAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {userSliceAction} from "../../redux/user-slice/userSlice.tsx";
import {useParams} from "react-router-dom";


const User1Component = () => {
    const {id} = useParams();
    const {user} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (id) dispatch(userSliceAction.loadUser(id))
    }, [id]);

    return (
        <div>
            {user &&  <div>{user.id}. {user.name}</div>}
        </div>
    );
};

export default User1Component;