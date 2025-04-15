import MenuCommentsComponent from "../components/menu-components/menu-comments/MenuCommentsComponent.tsx";
import {Outlet} from "react-router-dom";


const CommentsPage = () => {
    return (
        <div>
            <MenuCommentsComponent/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default CommentsPage;