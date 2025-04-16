import MenuUsersComponent from "../components/users-components/menu-components/MenuUsersComponent.tsx";
import {Outlet} from "react-router-dom";


const UsersPage = () => {
    return (
        <div>
            <MenuUsersComponent/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default UsersPage;