import React, { useState, useEffect } from "react";
import HeaderPageHome from "../../Components/HeaderPage/HeaderPageHome";
import PokemonsCard from "../../Components/PokemonsCard/PokemonsCard";
import { ContainerHeader } from "../../Components/HeaderPage/styleHeader";
import { Button } from "@material-ui/core";
import { ContainerGrid } from "./styledHome";
import { useHistory } from "react-router-dom";
import { goToPokedex } from "../../routes/coordinator";
import Spinner from "react-bootstrap/Button";

import axios from "axios";

export default function HomePage() {
  const [data, setdata] = useState();
  const [next, setnext] = useState();
  const history = useHistory();

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => {
        setdata(res.data.results);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const pokeList =
    data &&
    data.map((poke) => {
      return <PokemonsCard poke={poke} />;
    });

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
        <HeaderPageHome nome={"Lista de Pokemons (vindas da API)"} />
      </ContainerHeader>
      <ContainerGrid>
        {pokeList && pokeList.length > 0 ? (
          pokeList
        ) : (
          <>
            {/* <p>Carregando...</p> */}
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" />
            <Spinner animation="grow" />
            <Spinner animation="grow" size="sm" />
          </>
        )}
      </ContainerGrid>
    </>
  );
}
