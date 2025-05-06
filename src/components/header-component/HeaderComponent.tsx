import {useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext.tsx";


const HeaderComponent = () => {
    const {changeTheme} = useContext(ThemeContext);
    const handleDark = () => {
        changeTheme('dark')
    }
    const handleLight = () => {
        changeTheme('light')
    }

    return (
        <div className={'flex'}>
            <div className={'flex-1/1'}>
                <ul className={'flex justify-around'}>
                    <li>home</li>
                    <li>about</li>
                    <li>contact</li>
                    <li>login</li>
                </ul>
            </div>
            <div className={'flex-1/5 ml-15'}>
                <button onClick={handleDark}><img className={'w-10'} src="src/icons/icons8-dark-48.png" alt="dark"/></button>
                <button onClick={handleLight}><img className={'w-10'} src="src/icons/icons8-light-64%20.png" alt="light"/></button>
            </div>
        </div>
    );
};

export default HeaderComponent;