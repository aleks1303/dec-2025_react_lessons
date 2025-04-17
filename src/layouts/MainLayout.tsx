import {Outlet} from "react-router-dom";
import MenuLayoutComponent from "../components/menu-components/MenuLayoutComponent.tsx";


const MainLayout = () => {
    return (
        <div>
            <MenuLayoutComponent/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;