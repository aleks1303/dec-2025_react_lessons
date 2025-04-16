import {IPostsJson} from "../../../models/posts-json/IPostsJson.ts";
import {FC} from "react";

type PropsPostJsonType = {
    item: IPostsJson
}
const PostJsonComponent: FC<PropsPostJsonType> = ({item}) => {
    return (
        <div className={'flex p-2 border-1 border-y-1'}>
            <p className={'flex-1/8 mr-2 border-xr-1'}>userId: {item.userId}  id: {item.id}</p>
            <h4 className={'flex-1/3 mr-2'}>title: {item.title}</h4>
            <p className={'flex-1/2 mr-2'}>body: {item.body}</p>
        </div>
    );
};

export default PostJsonComponent;

