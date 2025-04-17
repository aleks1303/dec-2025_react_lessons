import {IPost} from "../../models/PostModel.ts";
import {FC} from "react";

type PropsPostType = {
    item: IPost
}

const PostComponent: FC<PropsPostType> = ({item}) => {
    return (
        <div>
            {item.title}
        </div>
    );
};

export default PostComponent;