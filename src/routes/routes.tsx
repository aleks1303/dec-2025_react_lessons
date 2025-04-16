import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import CommentsPage from "../pages/CommentsPage.tsx";
import UsersJsonComponent from "../components/users-components/users-json-components/UsersJsonComponent.tsx";
import UsersDummyComponent from "../components/users-components/users-dummy-components/UsersDummyComponent.tsx";
import PostsDummyComponent from "../components/posts-components/posts-dymmy-components/post-dummy-components/PostsDummyComponent.tsx";

const router = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children: [
            {path: 'users', element: <UsersPage/>, children: [
                    {path: 'jsonplaceholder', element: <UsersJsonComponent/>},
                    {path: 'dummyjson', element: <UsersDummyComponent/>}
                ]},
            {path: 'posts', element: <PostsPage/>, children: [
                    {path: 'jsonplaceholder', element: <div>post / jsonplaceholder</div>},
                    {path: 'dummyjson', element: <PostsDummyComponent/>}
                ]},
            {path: 'comments', element: <CommentsPage/>, children: [
                    {path: 'jsonplaceholder', element: <div>comments / jsonplaceholder</div>},
                    {path: 'dummyjson', element: <div>comments / dummyjson</div>}
                ]}
        ]}
])

export {
    router
}