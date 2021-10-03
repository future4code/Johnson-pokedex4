import React, { useState, useEffect } from "react";
import axios from "axios";
import { GlobalContext } from "./GlobalContext";
import { baseURL } from "../Constants/BaseURL";

export const GlobalState = (props) => {
  const [pokemonNames, setPokemonNames] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    getPokemonNames();
  }, []);

  useEffect(() => {
    const newList = [];
    pokemonNames.forEach((item) => {
      axios
        .get(`${baseURL}/pokemon/${item.name}`)
        .then((res) => {
          newList.push(res.data);
          if (newList.length === 50) {
            setPokemons(newList);
          }
        })
        .catch((e) => console.log(e.message));
    });
  }, [pokemonNames]);

  const getPokemonNames = () => {
    axios
      .get(`${baseURL}/pokemon?limit=50`)
      .then((res) => {
        setPokemonNames(res.data.results);
      })
      .catch((e) => console.log(e.message));
  };

  const data = {
    pokemons,
    setPokemons,
    pokedex,
    setPokedex,
  };

  return (
    <GlobalContext.Provider value={data}>
      {props.children}
    </GlobalContext.Provider>
  );
};
