import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--very-light-gray);
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 45%;

  background-color: #FFF;
  width: 80%;
  height: 80%;
  border-radius: 20px;
  box-shadow: var(--shadow);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

  }
  
  
  `
  
  
  
  export const LoginMessage = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    background: linear-gradient(var(--Dark-Grayish-Blue), var(--secondary-color));
  border-radius: 20px 0px 0px  20px;
  @media (max-width: 768px) {
    display: none;

  }
`

export const Slogan = styled.h2`
  font-size: 16px;
  color: #FFF;
  margin-top: 10px;
  text-align: center;
  overflow: hidden;
  width: 500px;
  animation: ${fadeIn} 2s ease-in-out;  // Aplica a animação fadeIn com duração de 2 segundos
`

export const LoginForm = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;

padding: 2px;

`;
export const FormTitle = styled.h2`
  color: var(--secondary-color);
  margin-bottom: 20px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LoginInput =  styled.input`
  width: 70%;
  height: 40px;
  margin-bottom: 20px;
  padding-left: 10px;
  border:1px solid var(--Dark-Grayish-Blue);
  border-radius: 10px;

`

export const Buttons = styled.div`

 display: flex;
 justify-content: space-around;
 width: 80%;
 padding-bottom: 20px;
 @media (max-width: 568px) {
  flex-direction: column;
  align-items: center;

  

}
`

export const LinkPass = styled.a`
  color: var(--Dark-Grayish-Blue);
  &: hover {
    text-decoration: underline;
  }
`