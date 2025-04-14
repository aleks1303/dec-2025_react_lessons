import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx";
import PageHome from "./pages/PageHome.tsx";
import PageContacts from "./pages/PageContacts.tsx";
import PageAbout from "./pages/PageAbout.tsx";



// router рендереться в render з викликом RouterProvider router={router}
// const router = createBrowserRouter([
//     {path: '/', element: <MainLayout/>, children: [
//             {path: '', element: <PageHome/>},
//             {path: 'about', element: <PageAbout/>},
//             {path: 'contacts', element: <PageContacts/>, children: [
//                     {path: '1', element: <div>one</div>},
//                     {path: '2', element: <div>two</div>},
//                     {path: '3', element: <div>three</div>}
//                 ]}
//         ]}
// ])


createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={''} element={<PageHome/>}/>
                <Route path={'about'} element={<PageAbout/>}/>
                <Route path={'contacts'} element={<PageContacts/>}>
                    <Route path={'1'} element={<div>one</div>}/>
                    <Route path={'2'} element={<div>two</div>}/>
                    <Route path={'3'} element={<div>three</div>}/>
                </Route>


            </Route>
        </Routes>
    </BrowserRouter>
)
