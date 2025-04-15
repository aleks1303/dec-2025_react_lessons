import MenuComponents from "../components/menu/MenuComponents.tsx";
import {Outlet} from "react-router-dom";


const Layout = () => {
    return (
        <div>
            <MenuComponents/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default Layout;