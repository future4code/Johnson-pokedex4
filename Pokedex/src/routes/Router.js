import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import PokedexPage from "../pages/Pokedex/PokedexPage";
import DetailPage from "../pages/PaginaDetalhes/DetailPage";
import ErrorPage from "../pages/PaginaDeErro/ErrorPage";

export default function Router(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>

        <Route exact path={"/pokedex"}>
          <PokedexPage />
        </Route>

        <Route exact path={`/detalhes/pokemon/:nome`}>
          <DetailPage />
        </Route>

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
