import {useFetch} from "../hooks/useFetch.tsx";
import {IComment} from "../models/IComment.ts";


const CommentsComponent = () => {
    const comments = useFetch<IComment[]>('https://jsonplaceholder.typicode.com/comments', []);
    return (
        <div>
            {
                comments.map(comment => (<div key={comment.id}>{comment.id}. {comment.name}</div>))
            }
        </div>
    );
};

export default CommentsComponent;