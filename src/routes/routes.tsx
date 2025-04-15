import {createBrowserRouter} from "react-router-dom";
import Layout from "../layouts/Layout.tsx";


const routes = createBrowserRouter([
    {path: '', element: <Layout/>, children: [
            {path: '/users', element: <div>users</div>},
            {path: '/posts', element: <div>posts</div>},
            {path: '/comments', element: <div>comments</div>},
            {path: '/products', element: <div>products</div>}
        ]},
])

export {
    routes
}