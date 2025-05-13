import {IPost} from "../../models/IPost.ts";
import {FC} from "react";
import {Link} from "react-router-dom";

type PropsPostType = {
    item: IPost
}

const PostComponent:FC<PropsPostType> = ({item}) => {
    return (
        <div>
            <Link to={'details'} state={item}>{item.id} {item.title}</Link>
        </div>
    );
};

export default PostComponent;