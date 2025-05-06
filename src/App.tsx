import HeaderComponent from "./components/theme-component/HeaderComponent.tsx";
import MainComponent from "./components/main-component/MainComponent.tsx";
import {MyContext} from "./context/MyContext.tsx";
import {useContext, useState} from "react";


const App = () => {
    const [theme, setTheme] = useState('light')
    const {theme} = useContext(MyContext)
    return (
        <div>

            <MyContext.Provider value={

            }>
                <HeaderComponent/>
                <MainComponent/>
            </MyContext.Provider>



        </div>
    );
};

export default App;