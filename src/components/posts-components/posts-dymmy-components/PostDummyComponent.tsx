
import {FC} from "react";
import {IPostDummy} from "../../../models/posts-dummy/IPostDummy.ts";
import PostTagComponent from "./PostTagComponent.tsx";

type PropsPostsDummyType = {
    item: IPostDummy,
}

const PostDummyComponent: FC<PropsPostsDummyType> = ({item}) => {
    return (
        <div className={'flex border-1 p-2 '}>
            <div className={'flex-1/2 mr-4'}>
                <p>id: {item.id}.  Title: {item.title}</p>
                <p>body: {item.body}</p>
            </div>
            <div className={'flex-1/8 mr-4'}>
                <ul> tags:
                    {item.tags.map((tag, index) =>
                        <PostTagComponent key={index} tag={tag}/>)}
                </ul>
            </div>
            <div className={'flex-1/8 mr-4'}>
                <ul> reactions:
                    <li>likes: {item.reactions.likes}</li>
                    <li>dislikes: {item.reactions.dislikes}</li>
                </ul>
            </div>
            <div className={'flex-1/8 mr-4'}>
                <p>views: {item.views}</p>
                <p>userId: {item.userId}</p>
            </div>
        </div>
    );
};

export default PostDummyComponent;



// {
//     "id": 1,
//     "title": "His mother had always taught him",
//     "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
//     "tags": [
//     "history",
//     "american",
//     "crime"
// ],
//     "reactions": {
//     "likes": 192,
//         "dislikes": 25
// },
//     "views": 305,
//     "userId": 121
// }