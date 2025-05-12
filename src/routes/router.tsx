import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import HomePage from "../pages/HomePage.tsx";
import UserPage from "../pages/UserPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import CommentPage from "../pages/CommentPage.tsx";
import User1Component from "../components/user-components/User-1Component.tsx";
import ComplexPage from "../pages/ComplexPage.tsx";

export const router = createBrowserRouter([
    {path:'/', element: <MainLayout/>, children: [
            {index:true, element: <HomePage/>},
            {path: '/users', element: <UserPage/>},
            {path: '/posts', element: <PostsPage/>},
            {path: '/comments', element: <CommentPage/>},
            {path: '/users/:id', element: <User1Component/>},
            {path: '/complex', element:<ComplexPage/>}
        ]}
]);