import {IPosts} from "../../models/IPosts.ts";
import {FC} from "react";


type MyPropsPosts = {
    item: IPosts
}

const PostComponent:FC<MyPropsPosts> = ({item}) => {
    return (
            <div className={' flex m-2 p-1 border-1'}>
                <h3 className={'flex-1/9'}>UserId:{item.userId}, id: {item.id}</h3>
                <h3 className={'flex-1/5 mr-2'}>title: {item.title}</h3>
                <p className={'flex-3/4'}>body: {item.body}</p>
                <br/>
            </div>
    );
};

export default PostComponent;