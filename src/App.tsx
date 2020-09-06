import React from "react";
import Routes from "./routes";
import GlobalStyle from "./styles/GlobalStyle";
import { ToastProvider } from "./hooks/toast";
function App() {
  return (
      <ToastProvider>
        <GlobalStyle />
        <Routes />
      </ToastProvider>
  );
}

export default App;
