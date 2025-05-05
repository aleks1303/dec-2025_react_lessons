import {useContext} from "react";
import {MyContext} from "../../context/MyContext.tsx";


const LeftComponentChildren2 = () => {
    const {counterValue} = useContext(MyContext);
    return (
        <div>
            LeftComponentChildren2
           this is counter Value = {counterValue}
        </div>
    );
};

export default LeftComponentChildren2;