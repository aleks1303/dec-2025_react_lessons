import {useDummy} from "../hooks/useDummy.tsx";
import {IPostsBase} from "../models/IPostModel/IPostBase.ts";


const PostsComponent = () => {
    const {posts} = useDummy<IPostsBase>('https://dummyjson.com/posts', {
        total: 0,
        skip: 0,
        limit: 0,
        posts: []})
    return (
        <div>
            {
                posts.map(post => (<div key={post.id}>{post.id}. {post.title}</div>))
            }
        </div>
    );
};

export default PostsComponent;