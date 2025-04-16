import MenuLayoutComponent from "../components/menu-layout-component/MenuLayoutComponent.tsx";
import {Outlet} from "react-router-dom";


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