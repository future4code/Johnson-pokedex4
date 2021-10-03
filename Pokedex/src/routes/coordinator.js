export const goToHomePage = (history) => {
  history.push("/");
};

export const goToPokedex = (history) => {
  history.push("/pokedex");
};

export const goToApplicationFormPage = (history) => {
  history.push("/detalhes/pokemon");
};

export const goBack = (history) => {
  history.goBack();
};
export const goToDetailPokemon = (history, nome, isPokedex) => {
  isPokedex
    ? history.push(`/detalhes/pokemon/${nome}/telaPokedex`)
    : history.push(`/detalhes/pokemon/${nome}`);
};
