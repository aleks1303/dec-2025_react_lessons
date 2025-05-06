import HeaderComponent from "../header-component/HeaderComponent.tsx";
import InfoComponent from "../info-component/InfoComponent.tsx";
import {useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext.tsx";


const MainComponent = () => {
    const {theme} = useContext(ThemeContext);
    const dark = 'bg-black text-white';
    const light = 'bg-white text-black'
    return (
        <div className={theme === 'dark' ? dark : light}>
            <HeaderComponent/>
            <InfoComponent/>
        </div>
    );
};

export default MainComponent;