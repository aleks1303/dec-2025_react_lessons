import {createContext} from "react";

type MyContextType = {
    theme: string,
    changeTheme: (theme:string) => void
}

export const MyContextObject: MyContextType = () => {



export const MyContext = createContext<MyContextType>({});