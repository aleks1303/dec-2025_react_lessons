import {useAppSelector} from "../../redux/hooks/userAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {userSliceAction} from "../../redux/user-slice/userSlice.tsx";
import {postsSliceActions} from "../../redux/post-slice/postSlice.tsx";
import {commentsSliceActions} from "../../redux/comment-slice/commentSlice.tsx";
import UserComponent from "../user-components/UserComponent.tsx";
import PostComponent from "../post-components/PostComponent.tsx";
import CommentComponent from "../comment-components/CommentComponent.tsx";


const ComplexComponent = () => {
    const {users} = useAppSelector(({userSlice}) => userSlice);
    const {posts} = useAppSelector(({postSlice}) => postSlice);
    const {comments} = useAppSelector(({commentSlice}) => commentSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (!users.length) {
            dispatch(userSliceAction.loadUsers())
        }
        if (!posts.length) {
            dispatch(postsSliceActions.loadPosts())
        }
        if (!comments.length) {
            dispatch(commentsSliceActions.loadComment())
        }

    }, [users.length, posts.length, comments.length, dispatch]);

    return (
        <div>
            {users.map(user => (<UserComponent key={user.id} item={user}/>))}
            {posts.map(post => (<PostComponent key={post.id} item={post}/>))}
            {comments.map(comment => (<CommentComponent key={comment.id} item={comment}/>))}
        </div>
    );
};

export default ComplexComponent;