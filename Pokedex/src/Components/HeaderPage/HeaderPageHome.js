import React from "react";
import {ContainerHeader} from "./styleHeader"

export default function HeaderPageHome(props) {
  return (
    <ContainerHeader>
      <h1>{props.nome}</h1>
      <div links={props.links}></div>
    </ContainerHeader>
  );
}
