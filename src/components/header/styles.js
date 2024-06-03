import styled from "styled-components";
import toggle from '../../assets/images/icon-hamburger.svg'
export const TagHeader = styled.header` 
display: flex;
justify-content: space-between; 
align-items: center;
padding: var(--padding-primary-page);
padding-top: 5%;
padding-bottom: 3%;

@media(max-width: 600px) {
    padding: 5%;
}

`;

export const ButtonDiv = styled.div`

    @media(max-width: 600px){
        display: none;
    }
`

export const MenuToggle = styled.a`
width: 30px;
height: 20px;
background-image: url(${toggle});
background-size: contain;
background-repeat: no-repeat;
display: none;

@media(max-width: 600px) {
  display: inline-block;
}
`


