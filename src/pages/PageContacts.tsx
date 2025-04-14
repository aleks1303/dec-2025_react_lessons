import MenuContacts from "../components/MenuContacts.tsx";
import {Outlet} from "react-router-dom";


const PageContacts = () => {
    return (
        <div>
            <MenuContacts/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default PageContacts;