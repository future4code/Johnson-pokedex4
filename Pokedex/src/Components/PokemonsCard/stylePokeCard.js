import styled from "styled-components";

export const PokeCardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  height: 300px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 8px;
  border: 1px solid black;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 10px 5px 5px black;

  img {
   max-width: 50%;
    border-radius: 50%;
  }

  button {
    margin: 4px;
  }
`;
