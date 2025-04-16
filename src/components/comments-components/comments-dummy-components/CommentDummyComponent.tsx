import {ICommentsDummy} from "../../../models/comments-dummy/ICommentsDummy.ts";
import {FC} from "react";

type PropsCommentsDummy = {
    item: ICommentsDummy
}
const CommentDummyComponent: FC<PropsCommentsDummy> = ({item}) => {
    return (
        <div className={'flex border-1 p-2'}>
            <p className={'flex-1/12'}>id: {item.id} postId: {item.postId}</p>
            <p className={'flex-1/5'}>body: {item.body}</p>
            <p className={'flex-1/12'}>likes: {item.likes}</p>
            <ul className={'flex-1/5'}>user:
                <li>id: {item.user.id} {item.user.fullName}</li>
                <li>username: {item.user.username}</li>
            </ul>
        </div>
    );
};

export default CommentDummyComponent;

