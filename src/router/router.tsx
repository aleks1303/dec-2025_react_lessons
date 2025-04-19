import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import CharacterPage from "../pages/CharacterPage.tsx";

const router = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children: [
            {path: 'users', element: <CharacterPage/>}
        ]}
])

export {
    router
}