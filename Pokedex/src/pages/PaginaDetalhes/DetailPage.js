import React, { useEffect, useState } from "react";
import { ContainerHeader } from "../../Components/HeaderPage/styleHeader";
import { Button } from "@material-ui/core";
import HeaderPageHome from "../../Components/HeaderPage/HeaderPageHome";
import { useParams, useHistory } from "react-router";
import { goBack } from "../../routes/coordinator";
import Spinner from "react-bootstrap/Button";
import axios from "axios";

export default function DetailPage() {
  const [dataPoke, setdataPoke] = useState();
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${params.nome}`)
      .then((res) => {
        console.log(res.data);
        setdataPoke(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
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
      <img
        src={dataPoke && dataPoke.sprites.front_default}
        alt="foto do pokemon"
      />
      <img
        src={
          dataPoke && dataPoke ? (
            dataPoke.sprites.back_default
          ) : (
            <>
              <p>Carregando...</p>
              <Spinner animation="grow" size="sm" />
              <Spinner animation="grow" />
              <Spinner animation="grow" />
              <Spinner animation="grow" size="sm" />
            </>
          )
        }
      />
      <img
        src={dataPoke && dataPoke.sprites.front_shiny}
        alt="foto do pokemon"
      />
    </div>
  );
}
