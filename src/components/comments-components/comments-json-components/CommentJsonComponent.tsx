import {ICommentJson} from "../../../models/comments-json.ts";
import {FC} from "react";

type PropsCommentJson = {
    item: ICommentJson
}

const CommentJsonComponent:FC<PropsCommentJson> = ({item}) => {
    return (
        <div className={'flex border-1 p-2'}>
            <p className={'flex-1/10 mr-3'}>postId: {item.postId} id: {item.id}</p>
            <p className={'flex-1/4 mr-3'}>name: {item.name}</p>
            <p className={'flex-1/5 mr-3'}>email: {item.email}</p>
            <p className={'flex-1/2 mr-3'}>body: {item.body}</p>
        </div>
    );
};

export default CommentJsonComponent;
