import {postSliceActions, useAppSelector} from "../../stores/store.tsx";
import {useDispatch} from "react-redux";
import {useEffect} from "react";


const PostsComponent = () => {
    const {posts} = useAppSelector(state => state.postSlice);
    const dispatch = useDispatch();
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then(response => {
                dispatch(postSliceActions.loadPost(response))
            });
    }, [dispatch]);

    return (
        <div>
            {
                posts.map(post => (<div key={post.id}>{post.id} {post.title}</div>))
            }
        </div>
    );
};

export default PostsComponent;