
import styled from "styled-components";

export const PokeCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: column;
  height: 300px;
  width: 300px;
  padding: 8px;
  border: 1px solid black;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 10px 5px 5px black;

  img {
    width: 50%;
    border-radius: 50%;
  }

  button{
    margin: 4px;
  }
`;


