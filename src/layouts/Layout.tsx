import MenuComponent from "../components/menu/MenuComponent.tsx";
import {Outlet} from "react-router-dom";


const Layout = () => {
    return (
        <>
            <MenuComponent/>
            <hr/>
            <Outlet/>
        </>
    );
};

export default Layout;