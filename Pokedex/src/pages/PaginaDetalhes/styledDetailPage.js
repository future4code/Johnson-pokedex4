import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  height: 100vh;
  justify-content: space-around;
`;

export const ContainerImgs = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid black;
  margin-top: 15px;

  img {
    width: 100%;
  }
`;

export const ContainerStats = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 15px;
  width: 200px;
  height: 415px;
  font-weight: bold;
  border: 1px solid black;
  justify-content: space-around;
`;

export const ContainerTypesMoves = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content:space-between;
  width: 300px;
  height: 415px;
  margin-top:15px;
`

export const ContainerTypes = styled.div`
  border: 1px solid black;
`;

export const ContainerMoves = styled.div`
  border: 1px solid black;
  height: 300px;
  text-align: center;
  
`;
