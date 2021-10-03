import React from "react";
import Router from "../src/routes/Router";
import { CssBaseline } from "@material-ui/core";
import GlobalStyle from "./globalstyle";
import { GlobalState } from "./global/GlobalState";

function App() {
  return (
    <>
      <GlobalState>
        <GlobalStyle />
        <CssBaseline />
        <Router />
      </GlobalState>
    </>
  );
}

export default App;
