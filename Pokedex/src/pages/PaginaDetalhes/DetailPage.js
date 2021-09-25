import React, { useEffect, useState } from "react";
import { ContainerHeader } from "../../Components/HeaderPage/styleHeader";
import { Button } from "@material-ui/core";
import HeaderPageHome from "../../Components/HeaderPage/HeaderPageHome";
import { useParams, useHistory } from "react-router";
import { goBack } from "../../routes/coordinator";

import axios from "axios";

export default function DetailPage() {
  //setando o estado dos dados da Api 
  const [dataPoke, setdataPoke] = useState();
  const [stats, setstats] = useState();
  // const [move, setmove] = useState()

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
        console.log(res.data);
        setdataPoke(res.data);
        setstats(res.data.stats);
        // setmove(res.data.moves)
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

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
      <h1>{dataPoke && dataPoke.name}</h1>
   <div>
        <img
          src={dataPoke && dataPoke.sprites.front_default}
          alt="foto do pokemon"
        />
      </div> 
      <div>
        <img
          src={dataPoke && dataPoke.sprites.back_default}
          alt={"foto pokemon de costas"}
        />
      </div> 
      <p>
        {stats &&
          stats.map((i, index) => {
            return <li key={index}>{i.base_stat}</li>;
          })}
      </p>
    
    </>
  );
}
