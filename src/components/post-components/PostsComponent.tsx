import {FC, useEffect, useState} from "react";
import {IPost} from "../../models/IPost.ts";
import {postService} from "../../services/api.service.ts";
import PostComponent from "./PostComponent.tsx";
type MyPropsPostUserId = {
    userId: string
}

const PostsComponent: FC<MyPropsPostUserId> = ({userId}) => {
    const [posts, setPost] = useState<IPost[]>([])
    useEffect(() => {
        if (userId) {
            postService.getPostOfUserById(+userId).then(value => {
                setPost(value)
            })
        }

    }, [userId]);
    return (
        <div>
            {posts.map((item, index) => <PostComponent key={index} item={item}/>)}
        </div>
    );
};

export default PostsComponent;