import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { useHistory } from "react-router";
import { goToDetailPokemon } from "../../routes/coordinator";
import { PokeCardContainer } from "./stylePokeCard";
import { GlobalContext } from "./../../global/GlobalContext";

export default function PokemonsCard(props) {
  const { pokemons, setPokemons, pokedex, setPokedex } =
    useContext(GlobalContext);
  const history = useHistory();

  const addToPokedex = () => {
    const pokeIndex = pokemons.findIndex(
      (item) => item.name === props.poke.name
    );
    const newPokemonsList = [...pokemons];
    newPokemonsList.splice(pokeIndex, 1);
    const orderedPokemons = newPokemonsList.sort((a, b) => {
      return a.id - b.id;
    });

    const newPokedexList = [...pokedex, props.poke];
    const orderedPokedex = newPokedexList.sort((a, b) => {
      return a.id - b.id;
    });

    setPokedex(orderedPokedex);
    setPokemons(orderedPokemons);
  };

  const removeFromPokedex = () => {
    const pokeIndex = pokedex.findIndex(
      (item) => item.name === props.poke.name
    );

    const newPokedexList = [...pokedex];
    newPokedexList.splice(pokeIndex, 1);
    const orderedPokedex = newPokedexList.sort((a, b) => {
      return a.id - b.id;
    });

    const newPokemonsList = [...pokemons, props.poke];
    const orderedPokemons = newPokemonsList.sort((a, b) => {
      return a.id - b.id;
    });

    setPokedex(orderedPokedex);
    setPokemons(orderedPokemons);
  };
  return (
    <>
      <PokeCardContainer sx={{ maxWidth: 345 }}>
        <div component="{}" alt="green iguana" height="140" />
        <img src={props.poke.sprites.front_default} alt={"texto da imagem"} />
        <div>
          <div variant="h5" component="div">
            <strong>{props.poke.name}</strong>
          </div>
          <div variant="body2" color="text.secondary">
            Experiência: {props.poke.base_experience}
          </div>
        </div>
        <div>
          <Button
            onClick={props.isPokedex ? removeFromPokedex : addToPokedex}
            variant={"contained"}
            size="small"
          >
            {props.isPokedex ? "Remover da Pokédex" : "Adicionar"}
          </Button>

          <Button
            onClick={() => goToDetailPokemon(history, props.poke.name)}
            variant={"outlined"}
            size="small"
          >
            Ver Detalhes
          </Button>
        </div>
      </PokeCardContainer>
    </>
  );
}
