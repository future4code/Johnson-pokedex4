import React, { useContext } from "react";
import HeaderPageHome from "../../Components/HeaderPage/HeaderPageHome";
import PokemonsCard from "../../Components/PokemonsCard/PokemonsCard";
import { ContainerHeader } from "../../Components/HeaderPage/styleHeader";
import { Button } from "@material-ui/core";
import { ContainerGrid } from "./styledHome";
import { useHistory } from "react-router-dom";
import { goToPokedex } from "../../routes/coordinator";

import { GlobalContext } from "./../../global/GlobalContext";

export default function HomePage() {
  const { pokemons } = useContext(GlobalContext);

  const pokeList =
    pokemons &&
    pokemons.map((poke, id) => {
      return <PokemonsCard key={poke.id} poke={poke} />;
    });

  const history = useHistory();

  return (
    <>
      <ContainerHeader>
        <Button
          onClick={() => goToPokedex(history)}
          variant={"contained"}
          color={"primary"}
        >
          Ver minha Pokedex
        </Button>
        <HeaderPageHome nome={"Lista de Pokemons"} />
      </ContainerHeader>
      <ContainerGrid>
        {pokeList && pokeList.length > 0 ? (
          pokeList
        ) : (
          <>
            <p>Carregando...</p>
          </>
        )}
      </ContainerGrid>
    </>
  );
}
