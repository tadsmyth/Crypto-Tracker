import React, { createContext, useState } from "react";

export const WatchListContext = createContext()

// This context allows the site to load up and have some default coins listed so the user knows what to expect from the site



// These exports allow me to use this const anywhere in the app.
//i made this in another file to ensure global scope without being in any one component
export const WatchListContextProvider = props => {
    const [watchList, setWatchList] = useState(['bitcoin', 'ethereum', 'dogecoin'])


    return (
        <WatchListContext.Provider value = {{watchList}}>
            {props.children}
        </WatchListContext.Provider>
    )
}