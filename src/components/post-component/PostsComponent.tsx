import {postSliceActions, useAppSelector} from "../../main.tsx";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {postService} from "../../services/api.service.tsx";
import PostComponent from "./PostComponent.tsx";


const PostsComponent = () => {
    const {posts} = useAppSelector(state => state.postSlice);
    const dispatch = useDispatch();
    useEffect(() => {
        postService.getAllPosts()
            .then(response => {
                dispatch(postSliceActions.loadPosts(response))
            })
    }, []);

    return (
        <div>
            {
                posts.map(post => (<PostComponent key={post.id} item={post}/>))
            }
        </div>
    );
};

export default PostsComponent;