import {useContext} from "react";
import {MyContext} from "../../context/MyContext.tsx";


const HeaderComponent = () => {

    const {changeTheme} = useContext(MyContext);


    const handlerLight = () => {
        changeTheme('light')
    }
    const handlerBlack = () => {
        changeTheme('dark')
    }
    return (
        <div className={'flex justify-center'}>
            <ul className={'flex justify-around gap-2'}>
                <li>home</li>
                <li>about</li>
                <li>contact</li>
            </ul>
            <div>
                <button onClick={handlerBlack}>
                    <img className={'w-7'} src="src/icons/icons8-dark-48.png" alt="dark"/>
                </button>
                <button onClick={handlerLight}>
                    <img className={'w-7'} src="src/icons/icons8-sun-48.png" alt="sun"/>
                </button>
            </div>
        </div>
    );
};

export default HeaderComponent;