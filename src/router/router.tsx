import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import HomePages from "../pages/HomePages.tsx";
import LoginPage from "../pages/LoginPage.tsx";
import AuthResourcesPage from "../pages/AuthResourcesPage.tsx";

const router = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children: [
            {index:true, element: <HomePages/>},
            {path: '/login', element: <LoginPage/>},
            {path: '/auth/resources', element: <AuthResourcesPage/>}
        ]}
])
export {
    router
}