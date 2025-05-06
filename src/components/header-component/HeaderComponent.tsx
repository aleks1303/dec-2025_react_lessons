import {useContext} from "react";
import {MyContext} from "../../context/MyContext.tsx";


const HeaderComponent = () => {
    const {change} = useContext(MyContext);
    const handleDark = () => {
        change('dark')
    }
    const handleLight = () => {
        change('light')
    }
    return (
        <div className={'flex justify-between'}>
            <div className={'flex-1/1'}>
                <ul className={'flex justify-between m-5'}>
                    <li>home</li>
                    <li>about</li>
                    <li>contacts</li>
                    <li>login</li>
                </ul>
            </div>
            <div className={'flex-1/10 m-5'}>
                <button onClick={handleDark}><img className={'w-5'} src="src/icons/icons8-dark-48.png" alt="dark"/>
                </button>
                <button onClick={handleLight}><img className={'w-5'} src="src/icons/icons8-light-64%20.png"
                                                   alt="light"/></button>
            </div>
        </div>
    );
};

export default HeaderComponent;