import {useEffect, useState} from "react";
import {ICommentJson} from "../../../models/comments-json.ts";
import {serviceJSPh} from "../../../services/api.service.ts";
import CommentJsonComponent from "./CommentJsonComponent.tsx";


const CommentsJsonComponent = () => {
    const [comments, setComments] = useState<ICommentJson[]>([]);
    useEffect(() => {
        serviceJSPh.getAllCommentJson().then(response => {
            setComments(response)
        })
    }, []);
    return (
        <div className={'bg-orange-50'}>
            {
                comments.map(comment => <CommentJsonComponent key={comment.id} item={comment}/>)
            }
        </div>
    );
};

export default CommentsJsonComponent;