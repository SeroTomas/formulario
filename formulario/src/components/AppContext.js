'use client'

import { createContext, useState } from "react";

export const AppContext = createContext();

function ContextProvider({ children }) {

    const [info, setInfo] = useState({
        page: 1,
        inputs: {
            name:'',
            email:'',
            phone:''
        },
        errors: {
            name:'',
            email:'',
            phone:''
        }
    })

    return (
        <AppContext.Provider value={{ info, setInfo }}>
            {children}
        </AppContext.Provider>
    )

}

export default ContextProvider;