import RightComponentChildren1 from "./RightComponentChildren1.tsx";
import RightComponentChildren2 from "./RightComponentChildren2.tsx";


const RightComponent = () => {
    return (
        <div>
            RightComponent
            <RightComponentChildren1/>
            <RightComponentChildren2/>
        </div>
    );
};

export default RightComponent;