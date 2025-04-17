import {IPost} from "../../models/IPost.ts";
import {FC} from "react";

type PropsPostsType = {
    item: IPost
}

const PostComponent:FC<PropsPostsType> = ({item}) => {
    return (
        <div>
            <div>{item.title}</div>
        </div>
    );
};

export default PostComponent;