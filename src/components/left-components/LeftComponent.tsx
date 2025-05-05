import LeftComponentChildren1 from "./LeftComponentChildren1.tsx";
import LeftComponentChildren2 from "./LeftComponentChildren2.tsx";


const LeftComponent = () => {
    return (
        <div>
            LeftComponent
            <LeftComponentChildren1/>
            <LeftComponentChildren2/>
        </div>
    );
};

export default LeftComponent;