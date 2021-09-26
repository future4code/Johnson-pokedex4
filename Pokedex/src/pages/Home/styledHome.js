import styled from "styled-components";

export const ContainerGrid = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(400px, auto));
  margin: 10px auto;
  gap: 8px;
  justify-items: center;
`;
