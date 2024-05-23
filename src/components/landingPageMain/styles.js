import styled from "styled-components";


export const Container =  styled.div`
    width: 100%;
`

export const Content1 = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: ${props => props.height};
    padding: ${props => props.padding ? props.padding : ''};
    padding-top: 0.625rem;
`
export const Content2 = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: repeat(3, auto);
    padding: 2rem;
    align-items: center;
`

export const PrimaryText = styled.div`
    grid-row: 1; 
    grid-column: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const Title = styled.h1`
    color: var(--secondary-color);
    font-size: ${props => props.fontSize};
`

export const Paragraph = styled.p`
    color: var(--Dark-Grayish-Blue);
    font-size: 16px;
    margin: 2.5rem 0rem;
    margin-right: 15.625rem;
    `

export const Graphics = styled.div`
    grid-row: 1; 
    grid-column: 2;
    display: flex; 
    justify-content: flex-end;
    align-items: flex-start;
    `

export const ImgGraphic = styled.img`
    height: 78%;
`

export const ManageDifferentList = styled.div`
    display: grid;
    
    grid-template-rows: repeat(6, auto);
    grid-template-columns: repeat(2, auto);
`

export const NumberText = styled.div`
    grid-row: ${props => props.row};
    grid-column: 1;
    margin-bottom: 20px;    
    margin-right: 20px;    
    padding: 10px 20px;
    color: #FFF;
    font-weight: 700;
    text-align: center;
    border-radius: 20px;
    background-color: var(--primary-color);
    `

    export const TitleManageTopics = styled.div`
    font-weight: 700;
    color: var(--secondary-color);
    grid-row: ${props => props.row};
    grid-column: 2
    `

    export const TextManageTopics = styled.div`
    color: var(--Dark-Grayish-Blue);
    grid-row: ${props => props.row};
    grid-column: 2;
    margin-bottom: 0.938rem;
`

export const TitleDiv = styled.div`
    grid-column: span 3;
    display: flex;
    justify-content: center;
    `

export const CardsDiv = styled.div`
    grid-column: span 3;
    display: flex;
    justify-content: center;
    align-items: center;
    `

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const CardText = styled.div`
    background-color: var(--very-light-gray);
    text-align: center;
    font-size:16px;
    color: var(--Dark-Grayish-Blue);
    padding: 1.25rem;
    margin: 0.625rem;
    margin-top: -0.938rem;
    border-radius: 10px;
`

export const CardImg = styled.img`
width: 4.375rem;
height: auto; 
z-index: 1;
`
export const CardName = styled.h2`
width: 4.375rem; 
height: auto; 
z-index: 1;
`

export const ButtonDiv = styled.div`
    grid-column: span 3;
    display: flex;
    justify-content: center;

`

