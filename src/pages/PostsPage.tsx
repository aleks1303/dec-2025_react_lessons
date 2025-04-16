import {Outlet} from "react-router-dom";
import MenuPostsComponent from "../components/posts-components/menu-posts-component/MenuPostsComponent.tsx";


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