import MainComponent from "./components/main-component/MainComponent.tsx";
import {MyContext} from "./context/MyContext.tsx";
import {useState} from "react";


const App = () => {
    const [themeValue, setThemeValue] = useState('light')
    return (
        <div>
            <MyContext.Provider value={{
                theme: themeValue,
                changeTheme: (themeValue:string) => {
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