import {useEffect, useState} from "react";
import {ICommentsDummy} from "../../../models/comments-dummy/ICommentsDummy.ts";
import {serviceDummy} from "../../../services/api.service.ts";
import CommentDummyComponent from "./CommentDummyComponent.tsx";


const CommentsDummyComponent = () => {
    const [comments, setComments] = useState<ICommentsDummy[]>([]);
    useEffect(() => {
        serviceDummy.getAllCommentsDummy().then(response => {
            setComments(response)
        })
    }, []);
    return (
        <div>
            {
                comments.map(comment =>
                    <CommentDummyComponent key={comment.id} item={comment}/>)
            }
        </div>
    );
};

export default CommentsDummyComponent;