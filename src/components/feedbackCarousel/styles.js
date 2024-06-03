  import styled from "styled-components";



  export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 2%;
  `;

  export const CardText = styled.div`
    background-color: var(--very-light-gray);
    text-align: center;
    font-size: 16px;
    color: var(--Dark-Grayish-Blue);
    padding: 1.25rem;
    margin: -0.938rem 0.625rem 40px;
    border-radius: 10px;

    @media(max-width: 600px) {
      font-size: 14px;


    }
    
    
    
    `;
    
    export const CardImg = styled.img`
    max-width: 100px;
    z-index: 1;
    `;

  export const CardName = styled.h2`
    font-size: 16px;
    color: var(--secondary-color);
  `;
