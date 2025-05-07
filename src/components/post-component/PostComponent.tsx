import {IPosts} from "../../models/interfaces/IPost.ts";
import {FC} from "react";

type PropsPostType = {
    item:IPosts
}
const PostComponent:FC<PropsPostType> = ({item}) => {
    return (
        <div>
            {item.id} {item.title}
        </div>
    );
};

export default PostComponent;