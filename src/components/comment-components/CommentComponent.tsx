import {IComment} from "../../models/IComment.ts";
import {FC} from "react";
import {Link} from "react-router-dom";

type PropsCommentType = {
    item: IComment
}

const CommentComponent:FC<PropsCommentType> = ({item}) => {
    return (
        <div>
            <Link to={'details'} state={item}>{item.id}. {item.name}</Link>
        </div>
    );
};

export default CommentComponent;