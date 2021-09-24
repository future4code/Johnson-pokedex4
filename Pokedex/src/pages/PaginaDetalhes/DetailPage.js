import React from "react";
import { ContainerHeader } from "../../Components/HeaderPage/styleHeader";
import { Button } from "@material-ui/core";
import HeaderPageHome from "../../Components/HeaderPage/HeaderPageHome";

export default function DetailPage() {
  return (
    <div>
      <ContainerHeader>
        <Button variant={"contained"} color={"primary"}>
          Voltar
        </Button>
        <HeaderPageHome nome={"Nome do Pokemon"} />
        <Button variant={"contained"} color={"primary"}>
          Adicionar/Remover da Pokedex
        </Button>
      </ContainerHeader>
    </div>
  );
}
