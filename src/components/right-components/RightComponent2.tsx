import {useContext} from "react";
import {MyContext} from "../../context/MyContext.tsx";

const RightComponent2 = () => {
    const { changeTheme} = useContext(MyContext);
const handlerDark = () => {
    changeTheme('dark')
}
    const handlerLight = () => {
        changeTheme('light')
    }
    return (
        <div>
            <p>RightComponent-2</p>
            <button onClick={handlerDark} className={'border-1'}>change theme on Dark</button>
            <button onClick={handlerLight} className={'border-1'}>change theme on Blue</button>
        </div>
    );
};

export default RightComponent2;