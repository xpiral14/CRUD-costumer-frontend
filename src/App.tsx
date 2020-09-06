import React from "react";
import Routes from "./routes";
import * as ReactRedux from "react-redux";
import store from "./store";
import GlobalStyle from "./styles/GlobalStyle";
function App() {
  return (
    <ReactRedux.Provider store={store}>
      <GlobalStyle />
      <Routes />
    </ReactRedux.Provider>
  );
}

export default App;
