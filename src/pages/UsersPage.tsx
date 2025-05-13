import UsersComponent from "../components/user-components/UsersComponent.tsx";
import {Outlet} from "react-router-dom";


const UsersPage = () => {
    return (
        <div className={'flex'}>
            <div className={'flex-1/2'}><UsersComponent/></div>
            <div className={'flex-1/2'}><Outlet/></div>
        </div>
    );
};

export default UsersPage;