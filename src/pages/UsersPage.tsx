import {Outlet} from "react-router-dom";
import MenuUsersComponent from "../components/users-components/menu-users-component/MenuUsersComponent.tsx";


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