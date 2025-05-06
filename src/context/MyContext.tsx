import {createContext} from "react";

type MyThemeType = {
    theme: string,
    change: (theme:string) => void
}
const MyThemeObject = {
    theme:'light',
    change: (theme:string) => {
        console.log(theme)
    }
}
export const MyContext = createContext<MyThemeType>(MyThemeObject);