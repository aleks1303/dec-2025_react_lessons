import {IComments} from "../../models/IComments.ts";
import {FC} from "react";

type MyPropsDummyComment = {
    item: IComments
}

const CommentComponent: FC<MyPropsDummyComment> = ({item}) => {
    return (
        <div className={'flex border-1'}>
            <p className={'flex-1/10 pl-4'}>id: {item.id}</p>
            <h4 className={'flex-1/3 pl-4 border-x-1'}>User: id:{item.user.id}, name: {item.user.fullName}</h4>
            <h4 className={'flex-1/5 pl-4'}>username: {item.user.username}</h4>
            <p className={'flex-1/4 pl-4 border-x-1'}>body: {item.body}</p>
            <p className={'flex-1/6 pl-4'}>PostId: {item.postId}</p>
            <p className={'flex-1/7 pl-4 border-x-1'}>likes: {item.likes}</p>
        </div>
    );
};

export default CommentComponent;



// export interface IComments {
//     id: number;
//     body: string;
//     postId: number;
//     likes: number;
//     user: User;
// }