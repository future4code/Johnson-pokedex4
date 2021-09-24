import React from "react";
import { ContainerHeader } from "../../Components/HeaderPage/styleHeader";
import { Button } from "@material-ui/core";
import HeaderPageHome from "../../Components/HeaderPage/HeaderPageHome";

export default function PokedexPage() {
  return (
    <div>
      <ContainerHeader>
        <Button variant={"contained"} color={"primary"}>
          Voltar para lista de Pokemons
        </Button>
        <HeaderPageHome nome={"Pokedex"} />
      </ContainerHeader>
    </div>
  );
}
