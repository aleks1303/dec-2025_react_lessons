import {IComments} from "../../models/IComments.ts";
import {FC} from "react";

type MyPropsComment = {
    comment:IComments
}

const CommentComponent: FC<MyPropsComment> = ({comment}) => {
    return (
        <div className={'flex m-2 border-1'}>
            <p className={'flex-1/15 mr-2'}>PostId: {comment.postId}, id: {comment.id}</p>
            <h3 className={'flex-1/5 mr-2'}>name: {comment.name}</h3>
            <h3 className={'flex-1/6 mr-2'}>email: {comment.email}</h3>
            <p className={'flex-2/4'}>body: {comment.body}</p>
        </div>
    );
};

export default CommentComponent;