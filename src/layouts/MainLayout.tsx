import MenuComponent from "../components/menu-component/MenuComponent.tsx";
import {Outlet} from "react-router-dom";
import FormComponent from "../components/form-components/FormComponent.tsx";


const MainLayout = () => {
    return (
        <div>

            <MenuComponent/>
            <FormComponent/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;