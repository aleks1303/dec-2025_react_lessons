import {useParams} from "react-router-dom";
import PostsComponent from "../components/post-components/PostsComponent.tsx";


const PostsPage = () => {
    const {userId} = useParams();


    return (
        <div>
            {
                userId && <PostsComponent userId={userId}/>
            }
        </div>
    );
};

export default PostsPage;