import {useLocation} from "react-router-dom";
import {IComment} from "../../models/IComment.ts";


const CommentDetailsComponent = () => {
  const details =  useLocation().state as IComment
    return (
        <div>
            <p>UserId: {details.postId}, email: {details.email}</p>
            <p>{details.body}</p>
        </div>
    );
};

export default CommentDetailsComponent;