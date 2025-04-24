import {createBrowserRouter} from "react-router-dom";
import CarsPage from "../pages/CarsPage.tsx";
import MainLayout from "../layouts/MainLayout.tsx";

const router = createBrowserRouter([
    {path: '', element: <MainLayout/>, children: [
            {path: 'cars', element: <CarsPage/>}
        ]}
])

export {
    router
}