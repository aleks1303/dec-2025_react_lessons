import {IPosts} from "../../models/IPosts.ts";
import {FC} from "react";
import ReactionsComponent from "./ReactionsComponent.tsx";

type MyPropsDummyPost = {
    post: IPosts
}

const PostComponents:FC<MyPropsDummyPost> = ({post}) => {
    return (
        <div className={'flex m-2 border-1'}>
            <h3 className={'flex-1/10 mr-4'}>id: {post.id} </h3>
            <h3 className={'flex-2/7 mr-4'}>title: {post.title}</h3>
            <p className={'flex-3/4 mr-4'}>body: {post.body}</p>
            <ul className={'flex-1/7 mr-4'}>{post.tags.map(tag => (<li>{tag}</li>))}</ul>
            <ReactionsComponent item={post.reactions}/>
            <p className={'flex-1/8 mr-4'}>views: {post.views}</p>
            <p className={'flex-1/8 mr-4'}>userId: {post.userId}</p>
        </div>
    );
};

export default PostComponents;






