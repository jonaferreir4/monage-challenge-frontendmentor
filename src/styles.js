import styled from "styled-components"
import bgImg from "./assets/images/bg-tablet-pattern.svg"

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr;
  background-color: #FFF;
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-size: content;
  background-position: 115% -5%;

  @media(max-width: 600px) {
    background-size: content;
    background-position: 20% -10%;

  }  
`;