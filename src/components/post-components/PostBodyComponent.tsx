import {useLocation} from "react-router-dom";
import {IPost} from "../../models/IPost.ts";


const PostBodyComponent = () => {
    const {state} = useLocation();
    const post = state as IPost
    return (
        <div>
            {post.body}
        </div>
    );
};

export default PostBodyComponent;