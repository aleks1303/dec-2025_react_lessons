import {useLocation} from "react-router-dom";
import {IUser} from "../../models/IUser.ts";


const UserDetailsComponent = () => {
    const {state} = useLocation();
    const user = state as IUser
    return (

            <div>
                <p> phone: {user.phone}</p>
                <p> email: {user.email}</p>
            </div>

    );
};

export default UserDetailsComponent;