import {useEffect, useState} from "react";
import {IPosts} from "../../models/IPosts.ts";
import {getDummyPosts} from "../../services/api.fetch-dummy.ts";
import PostComponents from "./PostComponents.tsx";


const PostsComponent = () => {
    const [posts, setPosts] = useState<IPosts[]>([]);
    useEffect(() => {
        const fetchPosts = async () => {
            const posts = await getDummyPosts();
            setPosts(posts)
        }
        fetchPosts()
    }, []);
    return (
        <div>
            {
                posts.map((post) => (<PostComponents key={post.id} post={post}/>))
            }
        </div>
    );
};

export default PostsComponent;