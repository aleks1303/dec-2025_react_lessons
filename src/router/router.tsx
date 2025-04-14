import {createBrowserRouter} from "react-router-dom";
import Layout from "../layouts/Layout.tsx";
import HomePage from "../pages/HomePage.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import DetailsUserPage from "../pages/DetailsUserPage.tsx";


const router = createBrowserRouter([
    {path: '', element: <Layout/>, children: [
            {path: '', element: <HomePage/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'users/details', element: <DetailsUserPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'byId', element:<div>I am Id</div>}
        ]}

])

export {
    router
}