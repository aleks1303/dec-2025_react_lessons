import {useLocation} from "react-router-dom";
import {IUser} from "../../models/IUsers.ts";


const UserDetailsComponent = () => {
const {state} = useLocation();
const item = state as IUser
    return (
        <div>
            {item.email} {item.phone}
        </div>
    );
};

export default UserDetailsComponent;