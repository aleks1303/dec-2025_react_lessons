import MenuUsersComponent from "../components/menu-components/menu-users/MenuUsersComponents.tsx";
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