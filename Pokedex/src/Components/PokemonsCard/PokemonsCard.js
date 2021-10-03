import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import { goToDetailPokemon } from "../../routes/coordinator";
import { PokeCardContainer } from "./stylePokeCard";

export default function PokemonsCard({ poke }) {
  const history = useHistory();

  return (
    <>
      <PokeCardContainer sx={{ maxWidth: 345 }}>
        <div component="{}" alt="green iguana" height="140" />
        <img src={poke.sprites.front_default} alt={"texto da imagem"} />
        <div>
          <div variant="h5" component="div">
            <strong>{poke.name}</strong>
          </div>
          <div variant="body2" color="text.secondary">
            Experiência: {poke.base_experience}
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
