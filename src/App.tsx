import MainComponent from "./components/main-component/MainComponent.tsx";
import {useState} from "react";
import {ThemeContext} from "./context/ThemeContext.tsx";


const App = () => {
    const [themeValue, setThemeValue] = useState('light')
    return (
        <ThemeContext.Provider value={{
            theme:themeValue,
            changeTheme:(obj) => {
                setThemeValue(obj)
            }
        }}>
           <MainComponent/>
        </ThemeContext.Provider>
    );
};

export default App;