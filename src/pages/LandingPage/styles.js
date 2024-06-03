import styled from "styled-components";

export const ContentPage = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

export const Content1 = styled.div`
  padding: var(--padding-primary-page);
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 0px 20px;
  }
`;

export const Content2 = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 0.5fr;
  grid-template-columns: repeat(3, auto);
  padding: 2rem;
  align-items: center;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 0;
  }

`;

export const PrimaryText = styled.div`
  grid-row: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    grid-row: 2;
    grid-column: span 2;
  }
`;

export const Title = styled.h1`
  color: var(--secondary-color);
  font-size: ${(props) => props.fontSize};

  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const Paragraph = styled.p`
  color: var(--Dark-Grayish-Blue);
  font-size: 16px;
  margin: 2.5rem 0rem;
  margin-right: 15.625rem;
  
  @media (max-width: 600px) {
    margin: 2.5rem 0rem;
    text-align: center;

  }

`;

export const ButtonWrapper = styled.div`
  @media (max-width: 600px) {
    width: 100%;
    display: flex;
    justify-content: center;
}
`

export const Graphics = styled.div`
  grid-row: 1;
  grid-column: 2;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;

  @media (max-width: 600px) {
    grid-column: span 2;
    justify-content: center;
    align-items: center;
  }
`;

export const ImgGraphic = styled.img`
  height: 78%;

  @media (max-width: 600px) {
    height: 55%;
  }
`;

export const ManageDifferentList = styled.div`
  display: grid;
  grid-template-rows: repeat(6, auto);
  grid-template-columns: repeat(2, auto);
`;

export const NumberText = styled.div`
  grid-row: ${(props) => props.row};
  grid-column: 1;
  margin: 0 20px 20px 0;
  padding: 10px 20px;
  color: #fff;
  font-weight: 700;
  text-align: center;
  border-radius: 20px;
  background-color: var(--primary-color);
`;

export const TitleManageTopics = styled.div`
  font-weight: 700;
  color: var(--secondary-color);
  grid-row: ${(props) => props.row};
  grid-column: 2;
`;

export const TextManageTopics = styled.div`
  color: var(--Dark-Grayish-Blue);
  grid-row: ${(props) => props.row};
  grid-column: 2;
  margin-bottom: 0.938rem;
`;

export const TitleDiv = styled.div`
  grid-column: span 3;
  display: flex;
  justify-content: center;
  @media (max-width: 600px) {
    grid-column: unset;
      text-align: center;    
  }
  `;
  
  export const CardsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 600px) {
    grid-column: unset;
  }
`;

export const ButtonDiv = styled.div`
  grid-column: span 3;
  display: flex;
  justify-content: center;
  @media (max-width: 600px) {
    grid-column: unset;
  }
`;
