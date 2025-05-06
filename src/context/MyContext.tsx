import {createContext} from "react";

type MyContextType = {
    theme: string,
    changeTheme: (theme:string) => void
}

export const MyContextObject = () => {

}


export const MyContext = createContext<MyContextType>({});