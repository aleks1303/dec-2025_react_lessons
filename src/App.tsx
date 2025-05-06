import MainComponent from "./components/main-component/MainComponent.tsx";
import {useState} from "react";
import {MyContext} from "./context/MyContext.tsx";


const App = () => {

    const [themeValue, setThemeValue] = useState('light')
    return (
        <div>
            <MyContext.Provider value={{
                theme: themeValue,
                change: (themeValue: string) => {
                    setThemeValue(themeValue)
                }
            }
            }>
                <MainComponent/>
            </MyContext.Provider>
        </div>
    );
};

export default App;