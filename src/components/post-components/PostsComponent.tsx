import {useAppSelector} from "../../redux/hooks/userAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {postsSliceActions} from "../../redux/post-slice/postSlice.tsx";
import PostComponent from "./PostComponent.tsx";


const PostsComponent = () => {
    const {posts} = useAppSelector(({postSlice}) => postSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(postsSliceActions.loadPosts())
    }, [dispatch]);
    return (
        <div>
            {
               posts.map(post => (<PostComponent key={post.id} item={post}/>))
            }
        </div>
    );
};

export default PostsComponent;