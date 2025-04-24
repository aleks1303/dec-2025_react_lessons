import {createBrowserRouter} from "react-router-dom";
import CarsPage from "../pages/CarsPage.tsx";
import MainLayout from "../layouts/MainLayout.tsx";
import FormPage from "../pages/FormPage.tsx";

const router = createBrowserRouter([
    {path: '', element: <MainLayout/>, children: [
            {path: 'cars', element: <CarsPage/>},
            {path: 'create', element:<FormPage/>}
        ]}
])

export {
    router
}