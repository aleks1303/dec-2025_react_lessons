import {IPost} from "../../models/IPost.ts";
import {FC} from "react";

type MyPropsPost = {
    item: IPost
}
const PostComponent:FC<MyPropsPost> = ({item}) => {
    return (
        <>
            <div>{item.title}</div>
        </>
    );
};

export default PostComponent;