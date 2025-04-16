import {useEffect, useState} from "react";
import {IPostDummy} from "../../../../models/posts-dummy/IPostDummy.ts";
import {serviceDummy} from "../../../../services/api.service.ts";
import PostDummyComponent from "./PostDummyComponent.tsx";


const PostsDummyComponent = () => {
    const [posts, setPosts] = useState<IPostDummy[]>([]);
    useEffect(() => {
        serviceDummy.getAllPostsDummy().then(response => {
            setPosts(response)
        })
    }, []);
    return (
        <div>
            {
                posts.map(post => <PostDummyComponent key={post.id} item={post}/>)
            }
        </div>
    );
};

export default PostsDummyComponent;