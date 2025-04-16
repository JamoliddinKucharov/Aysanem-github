import React, { createContext, useState } from "react";
export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [popupHandler, setPopuphandler] = useState(false);
    const [courseHandler, setCourseHandler] = useState(false);
    return (
        <GlobalContext.Provider
            value={{
                popupHandler,
                setPopuphandler,
                courseHandler,
                setCourseHandler
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
export default GlobalProvider;