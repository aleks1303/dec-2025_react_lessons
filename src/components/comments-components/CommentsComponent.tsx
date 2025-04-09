import {useEffect, useState} from "react";
import {IComments} from "../../models/IComments.ts";
import CommentComponent from "../comment-components/CommentComponent.tsx";
import {getComments} from "../../services/api.fetch.ts";


const CommentsComponent = () => {
    const [comments, setComments] = useState<IComments[]>([]);
    useEffect(() => {
    const fetchApi = async () => {
        const comments = await getComments()
        setComments(comments)
    }
    fetchApi()
    }, []);
    return (
        <div>
            {
                comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default CommentsComponent;