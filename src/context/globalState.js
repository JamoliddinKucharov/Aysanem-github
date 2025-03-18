import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [videoHandler, setVideoHandler] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        videoHandler,
        setVideoHandler,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
