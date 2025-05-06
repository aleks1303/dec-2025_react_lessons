import RightComponent from "./components/right-components/RightComponent.tsx";
import LeftComponent from "./components/left-components/LeftComponent.tsx";
import {MyContext} from "./context/MyContext.tsx";
import {useState} from "react";


const App = () => {
    const [themeValue, setThemeValue] = useState('light')
    return (
        <div className={'flex justify-around'}>

            <MyContext.Provider value={{
                theme:themeValue,
                changeTheme:(themeValue:string) => {
                    setThemeValue(themeValue)
                }
            }}>
                <LeftComponent/>
                <RightComponent/>
            </MyContext.Provider>

        </div>
    );
};

export default App;