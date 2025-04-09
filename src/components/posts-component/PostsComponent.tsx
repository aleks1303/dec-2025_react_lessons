import {useEffect, useState} from "react";
import {IPosts} from "../../models/IPosts.ts";
import PostComponent from "../post-component/PostComponent.tsx";
import {getPosts} from "../../services/api.fetch.ts";


const PostsComponent = () => {
    const [posts, setPosts] = useState<IPosts[]>([])
    useEffect(() => {
      const fetchPosts = async () => {
          const posts = await getPosts()
          setPosts(posts)
      }
      fetchPosts()
    }, []);
    return (
        <div>
            {
                posts.map(post => <PostComponent key={post.id} item={post}/>)
            }
        </div>
    );
};

export default PostsComponent;