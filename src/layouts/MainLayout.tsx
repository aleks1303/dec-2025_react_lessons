import MenuComponent from "../components/MenuComponent.tsx";
import {Outlet} from "react-router-dom";


const MainLayout = () => {
    return (
        <div>
            <MenuComponent/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;