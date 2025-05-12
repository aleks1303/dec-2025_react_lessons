import {useAppSelector} from "../../redux/hooks/userAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {commentsSliceActions} from "../../redux/comment-slice/commentSlice.tsx";
import CommentComponent from "./CommentComponent.tsx";


const CommentsComponent = () => {
    const {comments} = useAppSelector(({commentSlice}) => commentSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(commentsSliceActions.loadComment())
    }, [dispatch]);
    return (
        <div>
            {
                comments.map(comment => (<CommentComponent key={comment.id} item={comment}/>))
            }
        </div>
    );
};

export default CommentsComponent;