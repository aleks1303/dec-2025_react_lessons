import {Outlet} from "react-router-dom";
import MenuCommentsComponent
    from "../components/comments-components/menu-comments-components/MenuCommentsComponent.tsx";


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