import { createContext } from "react";
export interface IAppContext{
    menu: Menu
}

export const AppContext = createContext<>();