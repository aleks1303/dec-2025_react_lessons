import {IPost} from "../../models/IPost.ts";
import {FC} from "react";

type PropsPostType = {
    item: IPost
}
const PostComponent:FC<PropsPostType> = ({item}) => {
    return (
        <div>
            {item.id}. {item.title}
        </div>
    );
};

export default PostComponent;