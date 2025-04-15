import {createBrowserRouter} from "react-router-dom";
import Layout from "../layouts/Layout.tsx";
import HomePage from "../pages/HomePage.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import UsersDetailsPage from "../pages/UsersDetailsPage.tsx";

const routes = createBrowserRouter([
    {path: '/', element: <Layout/>, children: [
            {index: true, element: <HomePage/>},
            {path: 'users', element: <UsersPage/>},
            {path:'users/details', element:<UsersDetailsPage/>},
            {path: 'posts', element: <PostsPage/>}
        ]},

])

export {
    routes
}