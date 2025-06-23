'use strict';

import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
    
    const [user, setUser] = useState(true)

    const [DarkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        const modeClass = DarkMode ? 'dark-mode' : 'light-mode';
        document.body.className = modeClass;
        localStorage.setItem('theme', DarkMode ? 'dark' : 'light');
    }, [DarkMode]);


    const ContextValue = {
        user, setUser, DarkMode, setDarkMode
    }

    return (
        <AppContext.Provider value={ContextValue}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)