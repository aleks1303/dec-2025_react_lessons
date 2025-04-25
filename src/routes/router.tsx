import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import CarsPage from "../pages/CarsPage.tsx";
import FormPage from "../pages/FormPage.tsx";
import FormCreateComponent from "../components/forms-components/FormCreateComponent.tsx";
import FormDeleteComponent from "../components/forms-components/FormDeleteComponent.tsx";

const router = createBrowserRouter([
    {path: '', element: <MainLayout/>, children: [
            {path: 'cars', element: <CarsPage/>, children: [
                    {path:'forms', element: <FormPage/>, children: [
                            {path: 'create', element: <FormCreateComponent/>},
                            {path: 'delete', element: <FormDeleteComponent/>}
                        ]}
                ]}
        ]}
])

export {
    router
}