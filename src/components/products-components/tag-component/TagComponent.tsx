import {FC} from "react";

type MyPropsTagType = {
    item: string
}

const TagComponent: FC<MyPropsTagType> = ({item}) => {
    return (
        <div>
            <li> - {item}</li>
        </div>
    );
};

export default TagComponent;