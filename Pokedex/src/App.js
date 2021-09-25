import React from "react";
import Router from "../src/routes/Router";
import { CssBaseline } from "@material-ui/core";
import GlobalStyle from "./globalstyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <CssBaseline />
      <Router />
    </>
  );
}

export default App;
