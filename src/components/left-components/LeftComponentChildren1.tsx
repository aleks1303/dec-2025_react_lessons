import {useMemo} from "react";


const LeftComponentChildren1 = () => {
    const hello = useMemo(() => {
        for (let i = 0; i < 10; i++) {
            console.log(i)
        } return null
    }

    , []);
    console.log(hello)
    return (
        <div>
            LeftComponentChildren1
        </div>
    );
};

export default LeftComponentChildren1;