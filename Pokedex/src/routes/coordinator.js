

export const goToHomePage = (history) => {
  history.push("/");
};

export const goToPokedex = (history) => {
  history.push("/pokedex");
};

export const goToApplicationFormPage = (history) => {
  history.push("/detalhes/pokemon");
};

export const goToLoginPage = (history) => {
  history.push("");
};
export const goToTripDetailsPage = (history, id) => {
  history.push(`/admin/trips/${id}`);
};
