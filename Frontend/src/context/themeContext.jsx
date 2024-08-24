import {  createContext, useState,useContext } from "react";

const ThemeContext=createContext(null);

export function ThemeCompo({children}){
    const [theme,setTheme]=useState("light");
    return <>
        <ThemeContext.Provider value={{theme:theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    </>
}
export function useTheme(){
    const context=useContext(ThemeContext);
    if(!context)
        return    console.log("Outside of Context");
    return context;
}
