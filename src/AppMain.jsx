import React from "react";
import { ProviderTheme } from "./context/ProviderTheme";
import { App } from "./App";

const AppMain = () => {
  return (
    <>
      <ProviderTheme>
        <App />
      </ProviderTheme>
    </>
  );
};

export default AppMain;
