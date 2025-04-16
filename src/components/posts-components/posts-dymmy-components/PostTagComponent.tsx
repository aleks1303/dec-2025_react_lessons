import {FC} from "react";

type PropTagPostsType = {
    tag: string
}
const PostTagComponent:FC<PropTagPostsType> = ({tag}) => {
    return (
        <div>
            <li> - {tag}</li>
        </div>
    );
};

export default PostTagComponent;