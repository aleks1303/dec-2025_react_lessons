import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import HomePage from "../pages/HomePage.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PostPage from "../pages/PostPage.tsx";
import CommentPage from "../pages/CommentPage.tsx";
import InfoComponent from "../components/user-components/info-components/InfoComponent.tsx";
import PostBodyComponent from "../components/post-components/PostBodyComponent.tsx";
import CommentDetailsComponent from "../components/comment-components/CommentDetailsComponent.tsx";

export const router = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children: [
            {index:true, element: <HomePage/>},
            {path: '/users/', element: <UsersPage/>, children: [
                    {path: ':id', element: <InfoComponent/>}
                ]},
            {path: '/posts/', element: <PostPage/>, children: [
                    {path: ':id', element: <PostBodyComponent/>}
                ]},
            {path: '/comments/', element: <CommentPage/>, children: [
                    {path: ':id', element: <CommentDetailsComponent/>}
                ]}
        ]}
]);