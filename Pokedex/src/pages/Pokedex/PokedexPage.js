import React from "react";
import { ContainerHeader } from "../../Components/HeaderPage/styleHeader";
import { Button } from "@material-ui/core";
import HeaderPageHome from "../../Components/HeaderPage/HeaderPageHome";
import { goToHomePage } from "../../routes/coordinator";
import { useHistory } from "react-router";

export default function PokedexPage() {
  const history = useHistory();

  return (
    <>
      <ContainerHeader>
        <Button
          onClick={() => goToHomePage(history)}
          variant={"contained"}
          color={"primary"}
        >
          Voltar para lista de Pokemons
        </Button>
        <HeaderPageHome nome={"Pokedex"} />
      </ContainerHeader>
      <div></div>
    </>
  );
}
