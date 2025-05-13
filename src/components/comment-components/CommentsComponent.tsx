import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks.tsx";
import {useEffect} from "react";
import {commentSliceActions} from "../../redux/slices/commentSlise.tsx";
import CommentComponent from "./CommentComponent.tsx";


const CommentsComponent = () => {
    const {comments} = useAppSelector(({commentSlice}) => commentSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(commentSliceActions.loadComments())
    }, [dispatch]);
    return (
        <div>
            {comments.map(comment => (<CommentComponent key={comment.id} item={comment}/>))}
        </div>
    );
};

export default CommentsComponent;