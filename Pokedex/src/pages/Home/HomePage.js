import React, { useState, useEffect } from "react";
import HeaderPageHome from "../../Components/HeaderPage/HeaderPageHome";
import PokemonsCard from "../../Components/PokemonsCard/PokemonsCard";
import { ContainerHeader } from "../../Components/HeaderPage/styleHeader";
import { Button } from "@material-ui/core";
import { ContainerGrid } from "./styledHome";
import axios from "axios";

export default function HomePage() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => {
        console.log(res.data);
        setdata(res.data.results);
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
        <Button variant={"contained"} color={"primary"}>
          Ver minha Pokedex
        </Button>
        <HeaderPageHome nome={"Lista de Pokemons (vindas da API)"} />
      </ContainerHeader>
      <ContainerGrid>
        {pokeList && pokeList.length > 0 ? pokeList : <p>Carregando...</p>}
      </ContainerGrid>
    </>
  );
}
