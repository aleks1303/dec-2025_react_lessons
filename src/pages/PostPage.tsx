import PostsComponent from "../components/post-components/PostsComponent.tsx";
import {Outlet} from "react-router-dom";


const PostPage = () => {
    return (
        <div className={'flex'}>
            <div className={'flex-1/2'}><PostsComponent/></div>
            <div className={'flex-1/2'}><Outlet/></div>
        </div>
    );
};

export default PostPage;