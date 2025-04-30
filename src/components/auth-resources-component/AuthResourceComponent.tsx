import {IComment} from "../../models/IComment.ts";
import {FC} from "react";

type PropComment = {
    item: IComment
}

const AuthResourceComponent:FC<PropComment> = ({item}) => {
    return (
        <div>
            {item.id}. {item.body}
        </div>
    );
};

export default AuthResourceComponent;