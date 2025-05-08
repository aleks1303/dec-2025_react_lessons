import {useEffect} from "react";
import PostComponent from "./PostComponent.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {postSliceActions} from "../../redux/postSlice/PostSlice.tsx";


const PostsComponent = () => {
  const {posts} = useAppSelector(state => state.postSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
      dispatch(postSliceActions.loadPosts())
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

