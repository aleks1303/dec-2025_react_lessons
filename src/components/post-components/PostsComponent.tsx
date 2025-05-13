import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks.tsx";
import {useEffect} from "react";
import {postSliceActions} from "../../redux/slices/postSlice.tsx";
import PostComponent from "./PostComponent.tsx";


const PostsComponent = () => {
    const {posts} = useAppSelector(({postSlice}) => postSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(postSliceActions.loadPosts())
    }, [dispatch]);
    return (
        <div>
            {
                posts.map( post => (<PostComponent key={post.id} item={post}/>))
            }
        </div>
    );
};

export default PostsComponent;