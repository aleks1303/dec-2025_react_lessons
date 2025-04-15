import UsersComponents from "../components/users-components/UsersComponents.tsx";
import {Outlet} from "react-router-dom";


const UsersPage = () => {
    return (
        <div>
            <UsersComponents/>
            <Outlet/>
        </div>
    );
};

export default UsersPage;