import LeftComponent from "./components/left-components/LeftComponent.tsx";
import RightComponent from "./components/right-component/RigthComponent.tsx";
import {MyContext} from "./context/MyContext.tsx";
import {useState} from "react";


const App = () => {

    const [counter, setCounter] = useState<number>(0)

    return (
        <div className={'flex justify-around'}>
          <MyContext.Provider value={{
              counterValue:counter,
              plus:(obj) => {
        setCounter(++obj)
              },
              minus:(obj) => {
                  setCounter(--obj)
              }
          }}>
              <LeftComponent/>
              <RightComponent/>
          </MyContext.Provider>



        </div>
    );
};

export default App;