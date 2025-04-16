import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import CommentsPage from "../pages/CommentsPage.tsx";
import UsersJSComponent from "../components/users-components/users-js-components/UsersJSComponent.tsx";
import UsersDummyComponent from "../components/users-components/users-dummy-components/UsersDummyComponent.tsx";

const router = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children: [
            {path: 'users', element: <UsersPage/>, children: [
                    {path: 'jsonplaceholder', element: <UsersJSComponent/>},
                    {path: 'dummyjson', element: <UsersDummyComponent/>}
                ]},
            {path: 'posts', element: <PostsPage/>, children: [
                    {path: 'jsonplaceholder', element: <div>post / jsonplaceholder</div>},
                    {path: 'dummyjson', element: <div>post / dummyjson</div>}
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