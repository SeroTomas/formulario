import React, {useState} from "react";
import AppContext from "@/components/AppContext";

function MyApp({Component, pageProps}) {

    const [context, setContext] = useState({})

    return(
        <AppContext.Provider value={{context, setContext}}>
            <Component {...pageProps}/>
        </AppContext.Provider>

    )
    
}

export default MyApp;