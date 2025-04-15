import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import CommentsPage from "../pages/CommentsPage.tsx";

const routes = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children: [
            {path: 'users', element: <UsersPage/>, children: [
                    {path: 'jsonplaceholder', element: <div>users / jsonplaceholder</div>},
                    {path: 'dummyjson', element: <div>users / dummyjson </div> }
                ]},
            {path: 'posts', element: <PostsPage/>, children: [
                    {path: 'jsonplaceholder', element: <div>posts / jsonplaceholder</div>},
                    {path: 'dummyjson', element: <div>posts / dummyjson </div> }
                ]},
            {path: 'comments', element: <CommentsPage/>, children: [
                    {path: 'jsonplaceholder', element: <div>comments / jsonplaceholder</div>}
                ]}


        ]}
])

export
{
    routes
}