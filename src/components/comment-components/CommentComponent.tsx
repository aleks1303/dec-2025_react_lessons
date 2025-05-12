import {IComment} from "../../models/IComments.ts";
import {FC} from "react";

type PropsCommentType = {
    item: IComment
}

const CommentComponent:FC<PropsCommentType> = ({item}) => {
    return (
        <div>
            {item.id}. {item.name}
        </div>
    );
};

export default CommentComponent;