import {useLocation} from "react-router-dom";
import {IUser} from "../../../models/IUser.ts";


const InfoComponent = () => {
    const {state} = useLocation();
    const user = state as IUser
    return (
        <div>
                <p>email: {user.email}</p>
                <p>phone: {user.phone}</p>
                <p>website: {user.website}</p>
                <ul> address:
                    <li>city: {user.address.city}</li>
                    <li>street: {user.address.street}</li>
                    <li>suite: {user.address.suite}</li>
                </ul>


        </div>
    );
};

export default InfoComponent;
