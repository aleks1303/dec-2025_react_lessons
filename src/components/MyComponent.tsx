import {FC} from "react";

type MyPropComponent = {text: string}

const MyComponent: FC<MyPropComponent> = ({text}) => {
    return (
        <div className="bg-black text-white p-5 m-6 text-center">
            <p>{text}</p>
        </div>
    );
};

export default MyComponent;