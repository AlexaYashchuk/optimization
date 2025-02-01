import React, { useState } from "react";
import MyContex from "./MyContex";

const MyContextProvider = ({children}) => {

    const [dark,setDark] = useState(false)

    const toggleTheme = () => {
        setDark((dark) => !dark)
    }

    const contextValue = {
        dark,
        toggleTheme,
    };

    return (
        <MyContex.Provider value={contextValue}>
        {children}
        </MyContex.Provider>
    );

};

  export default MyContextProvider;