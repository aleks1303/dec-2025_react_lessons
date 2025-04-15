import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {routes} from "./routes/routes.tsx";

createRoot(document.getElementById('root')!).render(

    // <BrowserRouter>
    //     <Routes>
    //         <Route path={'/'} element={<Layout/>}>
    //             <Route path={'users'} element={<div>users</div>}/>
    //             <Route path={'posts'} element={<div>posts</div>}/>
    //             <Route path={'comments'} element={<div>comments</div>}/>
    //             <Route path={'products'} element={<div>products</div>}/>
    //         </Route>
    //     </Routes>
    // </BrowserRouter>

    <RouterProvider router={routes}/>)
