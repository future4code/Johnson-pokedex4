import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import { goToDetailPokemon } from "../../routes/coordinator";
import { PokeCardContainer } from "./stylePokeCard";

export default function PokemonsCard(props) {
  const poke = props.poke;
  const history = useHistory();

  return (
    <>
      <PokeCardContainer sx={{ maxWidth: 345 }}>
        <div component="{}" alt="green iguana" height="140" />
        <img src={"https://picsum.photos/200"} alt={"texto da imagem"} />
        <div>
          <div variant="h5" component="div">
            <strong>{poke.name}</strong>
          </div>
          <div variant="body2" color="text.secondary">
            um do pokemon da lista
          </div>
        </div>
        <div>
          <Button variant={"contained"} size="small">
            Adicionar
          </Button>

          <Button
            onClick={() => goToDetailPokemon(history, poke.name)}
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
