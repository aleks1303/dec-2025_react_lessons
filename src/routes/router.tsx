import {createBrowserRouter} from "react-router-dom";
import CarsPage from "../pages/CarsPage.tsx";
import MainLayout from "../layouts/MainLayout.tsx";
import FormPage from "../pages/FormPage.tsx";
import FormDeleteComponent from "../components/form-components/FormDeleteComponent.tsx";

const router = createBrowserRouter([
    {path: '', element: <MainLayout/>, children: [
            {path: 'cars', element: <CarsPage/>},
            {path: 'cars/create', element:<FormPage/>},
            {path: 'cars/delete', element: <FormDeleteComponent/>}
        ]}
])

export {
    router
}