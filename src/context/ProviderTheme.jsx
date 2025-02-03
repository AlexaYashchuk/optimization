import React, { useState } from "react";
import { ContextTheme } from "./ContextTheme";

const ProviderTheme = ({ children }) => {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark((dark) => !dark);
  };

  const contextValue = {
    dark,
    toggleTheme,
  };

  return (
    <ContextTheme.Provider value={contextValue}>
      {children}
    </ContextTheme.Provider>
  );
};

export { ProviderTheme };
