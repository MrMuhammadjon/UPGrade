'use strict';

import { createContext, useContext, useState } from "react";

export const AppContext = createContext()

export const AppContextProvider = ({children}) => {
    const [user, setUser] = useState(()=>{
        const saveUser = localStorage.getItem('user');
        return saveUser
    })

    const ContextValue ={
        user, setUser,
    }

    return(
        <AppContext.Provider value={ContextValue}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)