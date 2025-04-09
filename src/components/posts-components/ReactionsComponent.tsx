import {IReactions} from "../../models/IPosts.ts";
import {FC} from "react";

type ReactionsPropsType = {
    item: IReactions
}

const ReactionsComponent: FC<ReactionsPropsType> = ({item}) => {

    return (
        <div className={'flex-1/9 mr-4'}>
            <h4>likes: {item.likes}</h4>
            <h4>dislikes: {item.dislikes}</h4>
        </div>
    );
};

export default ReactionsComponent;