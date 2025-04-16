import {useEffect, useState} from "react";
import {IPostsJson} from "../../../models/posts-json/IPostsJson.ts";
import {serviceJSPh} from "../../../services/api.service.ts";
import PostJsonComponent from "./PostJsonComponent.tsx";


const PostsJsonComponent = () => {
    const [posts, setPosts] = useState<IPostsJson[]>([]);
    useEffect(() => {
        serviceJSPh.getAllPostJson().then(response => {
            setPosts(response)
        })
    }, []);
    return (
        <div>
            {
                posts.map(post => <PostJsonComponent key={post.id} item={post}/>)
            }
        </div>
    );
};

export default PostsJsonComponent;