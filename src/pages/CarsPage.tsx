import CarsComponent from "../components/cars-components/CarsComponent.tsx";
import MenuFormComponent from "../components/menu-componetns/MenuFormComponent.tsx";
import {Outlet} from "react-router-dom";


const CarsPage = () => {
    return (
        <div>
            <MenuFormComponent/>
            <Outlet/>
            <hr/>
            <CarsComponent/>
        </div>
    );
};

export default CarsPage;