import {useContext} from "react";
import {MyContext} from "../../context/MyContext.tsx";


const RightComponentChildren2 = () => {
    const {counterValue, plus, minus} = useContext(MyContext);
    return (
        <div>
            RightComponentChildren2

            <button className={'border-1 m-2'} onClick={() => {
                plus(counterValue)
            }}>click me for plus </button>
            <button className={'border-1'} onClick={() => {
                minus(counterValue)
            }}>click me for minus</button>
        </div>
    );
};

export default RightComponentChildren2;