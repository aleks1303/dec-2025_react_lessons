import UsersComponent from "../components/user-components/UsersComponent.tsx";
import {Outlet} from "react-router-dom";


const UsersPage = () => {
    return (
        <div className={'flex'}>
            <UsersComponent/>
           <hr/>
            <div className={'ml-40'}><Outlet/></div>
        </div>
    );
};

export default UsersPage;