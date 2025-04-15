import MenuPostsComponent from "../components/menu-components/menu-posts/MenuPostsComponent.tsx";
import {Outlet} from "react-router-dom";


const PostsPage = () => {
    return (
        <div>
            <MenuPostsComponent/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default PostsPage;