import { Button } from "@material-ui/core";
import React from "react";
import { PokeCardContainer } from "./stylePokeCard";

export default function PokemonsCard(props) {
  const poke = props.poke;
  return (
    <PokeCardContainer sx={{ maxWidth: 345 }}>
      <div component="{}" alt="green iguana" height="140" />
      <img src={poke.url} alt={"Imagem Pokemon"}/>
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
        <Button variant={"contained"} size="small">
          Remover
        </Button>
      </div>
    </PokeCardContainer>
  );
}
