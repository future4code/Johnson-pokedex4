import React, { useContext } from "react";
import { ContainerHeader } from "../../Components/HeaderPage/styleHeader";
import { Button } from "@material-ui/core";
import HeaderPageHome from "../../Components/HeaderPage/HeaderPageHome";
import { goToHomePage } from "../../routes/coordinator";
import { useHistory } from "react-router";
import { GlobalContext } from "./../../global/GlobalContext";
import PokemonsCard from "../../Components/PokemonsCard/PokemonsCard";

export default function PokedexPage() {
  const { pokedex } = useContext(GlobalContext);
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
      {pokedex &&
        pokedex.map((poke) => {
          return <PokemonsCard key={poke.id} isPokedex poke={poke} />;
        })}
    </>
  );
}
