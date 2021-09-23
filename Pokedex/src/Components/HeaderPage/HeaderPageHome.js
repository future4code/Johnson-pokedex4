import React from "react";

export default function HeaderPageHome(props) {
  return (
    <div>
      <h1>{props.nome}</h1>
      <div links={props.links}></div>
    </div>
  );
}
