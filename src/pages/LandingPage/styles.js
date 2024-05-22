import styled from "styled-components";
import bgImg from "../../assets/images/bg-tablet-pattern.svg"

export const ContentPage = styled.div`
display: grid;
grid-template-rows: auto 1fr auto;
background-image: url(${bgImg});
background-size: content;
background-repeat: no-repeat;
background-position: 115% -10%;
`