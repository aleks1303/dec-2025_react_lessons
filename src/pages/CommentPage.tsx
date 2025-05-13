import CommentsComponent from "../components/comment-components/CommentsComponent.tsx";
import {Outlet} from "react-router-dom";


const CommentPage = () => {
    return (
        <div className={'flex'}>
            <div className={'flex-1/2'}><CommentsComponent/></div>
            <div className={'flex-1/2'}><Outlet/></div>
        </div>
    );
};

export default CommentPage;