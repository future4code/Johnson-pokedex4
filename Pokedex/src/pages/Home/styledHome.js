import styled from "styled-components";

export const ContainerGrid = styled.div`
  display: grid;
  max-width: 100%;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(4, 1fr);
  margin: 10px auto;
  gap: 8px;
`;
export const BackgroundBody = styled.div`
  background-color: #00f0ff;
`;
