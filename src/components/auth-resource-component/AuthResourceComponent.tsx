import {useEffect, useState} from "react";
import {loadAuthPosts} from "../../services/api.service.tsx";
import {IPost} from "../../models/IPost.ts";


const AuthResourceComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        loadAuthPosts().then( response => {
            setPosts(response)
        })
    }, []);
    return (
        <div>
            {
                posts.map(post => ( <div>{post.title}</div>))
            }
            </div>
    );
};

export default AuthResourceComponent;