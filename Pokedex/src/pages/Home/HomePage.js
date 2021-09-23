import React from "react";
import HeaderPageHome from "../../Components/HeaderPage/HeaderPageHome";
import PokemonsCard from "../../Components/PokemonsCard/PokemonsCard";

export default function HomePage() {
  return (
    <div>
      <PokemonsCard />
      <HeaderPageHome
        nome={"Título da Página"}
        links={["Comprar", "Contato", "Sobre"]}
      />
    </div>
  );
}
