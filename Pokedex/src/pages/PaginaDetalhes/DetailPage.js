import React, { useEffect, useState } from "react";
import { ContainerHeader } from "../../Components/HeaderPage/styleHeader";
import { Button } from "@material-ui/core";
import HeaderPageHome from "../../Components/HeaderPage/HeaderPageHome";
import { useParams, useHistory } from "react-router";
import { goBack } from "../../routes/coordinator";
import {
  PageContainer,
  ContainerImgs,
  ContainerStats,
  ContainerTypes,
  ContainerMoves,
  ContainerTypesMoves,
} from "./styledDetailPage";

import axios from "axios";

export default function DetailPage() {
  //setando o estado dos dados da Api
  const [dataPoke, setdataPoke] = useState();
  const [stats, setstats] = useState();
  const [types, settypes] = useState();
  const [move, setmove] = useState();

  //passando os parametros "guradados na URL"
  const params = useParams();

  //função que altera de pagina no coordinator
  const history = useHistory();

  //renderiza a lista toda vez que a página é carregada
  useEffect(() => {
    //fazendo chamada para a API com o parametro nome do pokemon
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${params.nome}`)
      .then((res) => {
        setdataPoke(res.data);
        setstats(res.data.stats);
        settypes(res.data.types);
        setmove(res.data.moves);

        // setmove(res.data.moves)
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const filterMove = move && move.slice(0, 3);

  return (
    <>
      <ContainerHeader>
        <Button
          onClick={() => goBack(history)}
          variant={"contained"}
          color={"primary"}
        >
          Voltar
        </Button>
        <HeaderPageHome nome={dataPoke && dataPoke.name} />
        <Button variant={"contained"} color={"primary"}>
          Adicionar/Remover da Pokedex
        </Button>
      </ContainerHeader>
      <PageContainer>
        <div>
          <ContainerImgs>
            <img
              src={dataPoke && dataPoke.sprites.front_default}
              alt="foto do pokemon"
            />
          </ContainerImgs>
          <ContainerImgs>
            <img
              src={dataPoke && dataPoke.sprites.back_default}
              alt={"foto pokemon de costas"}
            />
          </ContainerImgs>
        </div>
        <ContainerStats>
          {stats &&
            stats.map((i, index) => {
              return (
                <div key={index}>
                  {i.stat.name}: {i.base_stat}
                </div>
              );
            })}
        </ContainerStats>
        <ContainerTypesMoves>
          <ContainerTypes>
            {types &&
              types.map((typ) => {
                return <li key={typ}>{typ.type.name}</li>;
              })}
          </ContainerTypes>
          <ContainerMoves>
            <h5>Moves</h5>
            {filterMove &&
              filterMove.map((move) => {
                return <li>{move.move.name}</li>;
              })}
          </ContainerMoves>
        </ContainerTypesMoves>
      </PageContainer>
    </>
  );
}
