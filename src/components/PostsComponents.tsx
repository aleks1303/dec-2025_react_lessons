import {useFetch} from "../hooks/useFetch.tsx";
import {IPost} from "../models/IPost.ts";


const PostsComponents = () => {
    const posts = useFetch<IPost[]>('https://jsonplaceholder.typicode.com/posts', []);
    return (
        <div>
            {posts &&
                posts.map(post => (<div key={post.id}>{post.id}. {post.title}</div>))
            }
        </div>
    );
};

export default PostsComponents;