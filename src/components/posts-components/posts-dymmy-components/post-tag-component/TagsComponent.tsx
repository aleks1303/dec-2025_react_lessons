import {FC} from "react";

type  PropsTagPostsType  = {
    tags: string[]
}

const TagsComponent: FC<PropsTagPostsType> = ({tags}) => {
    return (
        <div>
            {
                tags.map(tag => (
                    <div>{tag}</div>
                ))
            }
        </div>
    );
};

export default TagsComponent;