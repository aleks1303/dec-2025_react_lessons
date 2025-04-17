import {useEffect, useState} from "react";
import {IPost} from "../../models/IPost.ts";
import {getAll} from "../../services/genarate.api.service.tsx";
import {IGenerateDummy} from "../../models/IGenerateDummy.ts";
import PostComponent from "./PostComponent.tsx";


const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        getAll<IGenerateDummy & {posts: IPost[]}>('/posts').then(response => {
            setPosts(response.posts)
        })
    }, []);
    return (
        <div>
            {
                posts.map(post => <PostComponent key={post.id} item={post}/>)
            }
        </div>
    );
};

export default PostsComponent;