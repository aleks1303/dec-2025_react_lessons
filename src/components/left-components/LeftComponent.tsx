import LeftComponent1 from "./LeftComponent1.tsx";
import LeftComponent2 from "./LeftComponent2.tsx";
import {useContext} from "react";
import {MyContext} from "../../context/MyContext.tsx";


const LeftComponent = () => {
    const {theme} = useContext(MyContext);
    const dark = 'bg-black text-white'
    const light = 'bg-blue-500 text-white'
    return (

        <div className={theme === 'dark' ? dark : light}>
            <div>
                LeftComponents
                <LeftComponent1/>
                <LeftComponent2/>
            </div>
        </div>
    );
};

export default LeftComponent;