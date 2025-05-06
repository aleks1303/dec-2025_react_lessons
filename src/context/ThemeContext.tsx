import {createContext} from "react";


type ThemeType = {
    theme: string,
    changeTheme: (obj:string) => void,

}

export const ThemeObject: ThemeType = {
    theme: 'light',
    changeTheme:(obj: string) => {
        console.log(obj)
    },

}


export const ThemeContext = createContext<ThemeType>(ThemeObject);