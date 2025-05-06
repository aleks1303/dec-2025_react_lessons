import HeaderComponent from "../header-component/HeaderComponent.tsx";
import InfoComponent from "../info-component/InfoComponent.tsx";
import {useContext} from "react";
import {MyContext} from "../../context/MyContext.tsx";


const MainComponent = () => {

const {theme} = useContext(MyContext);
const dark = 'bg-black text-white';
const light = 'bg-white text-black'
    return (
        <div className={theme === 'light' ? light : dark}>
                <HeaderComponent/>
                <InfoComponent/>
        </div>
    );
};

export default MainComponent;