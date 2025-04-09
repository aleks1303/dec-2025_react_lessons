import {useEffect, useState} from "react";
import {IComments} from "../../models/IComments.ts";
import {getDummyComments} from "../../services/api.fetch-dummy.ts";
import CommentComponent from "./CommentComponent.tsx";


const CommentsComponent = () => {
    const [comments, setComments] = useState<IComments[]>([]);
    useEffect(() => {
        const fetchComments = async () => {
            const comments = await getDummyComments();
            setComments(comments)
        }
        fetchComments()
    }, []);
    return (
        <div className={'m-4'}>
            {comments.map((comments) => <CommentComponent key={comments.id} item={comments}/>)}
        </div>
    );
};

export default CommentsComponent;