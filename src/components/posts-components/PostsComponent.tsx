import {useEffect, useState} from "react";
import {IPost} from "../../models/PostModel.ts";
import {getAll} from "../../services/generate.api.servive.tsx";
import {IGenerateType} from "../../models/GenerateModel.ts";
import PostComponent from "./PostComponent.tsx";


const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        getAll<IGenerateType & {posts: IPost[]}>('/posts').then(response => {
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

