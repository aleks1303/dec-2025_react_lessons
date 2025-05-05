import {createContext} from "react";


type MyContextType = {
    counterValue: number,
    plus:(obj: number) => void
    minus:(obj: number) => void
}

export const init = {
    minus:(obj: number) => {
        console.log(obj)
    },
    counterValue:0,
    plus:(obj: number) => {
        console.log(obj)}
}

export const MyContext = createContext<MyContextType>(init);