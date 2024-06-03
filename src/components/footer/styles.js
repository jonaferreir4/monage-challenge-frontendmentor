import styled from "styled-components";

export const TagFooter = styled.footer`
    display: flex;
    flex-direction: column;
`;

export const ContentFooter = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    background-color: var(--very-dark-blue);
    padding: var(--padding-primary-page);
    color: #FFF;

    @media(max-width: 600px) {
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: 1fr;
        justify-content: center;


    }
`;

export const Message = styled.div`
    background-color: var(--primary-color);
    grid-row: 1;
    grid-column: span 3;
    display: grid;
    grid-template-columns: 1fr auto;
    padding: var(--padding-primary-page);
    

    @media(max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;

    }

    
`;

export const MessageH1 = styled.h1`
    color: #FFF;
    @media(max-width: 600px) {
        text-align: center;
    }
`;

export const ButtonWrapper = styled.div`
@media(max-width: 600px) {
    padding: 2%;
    display: flex;
    justify-content: center;
    align-items: center;

}

`

export const LogoFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    @media(max-width: 600px) {
        grid-row: 3;
        justify-content: center;
    }
`;

export const SocialMedia = styled.div`
display: flex;
margin-top: 5%;

@media(max-width: 600px) {
    justify-content: space-around;
}


`;

export const SocialMediaImg = styled.img`
    padding-right: 13px;
    
    @media(max-width: 600px) {
        padding-right: 0;
    }
    &:hover {
        opacity: 0.8;
    }


`;

export const MoreInformations = styled.div`
    grid-column: 2;
    width: auto;
    display: flex;
    justify-content: space-between;

    @media(max-width: 600px) {
        grid-column: unset;
        grid-row: 2
    }
    
`;

export const TagUl = styled.ul`

`

export const TagLi = styled.li`
    list-style-type: none;
    padding: 5px 0;
    width: 50%;
    &:hover {
        opacity: 0.8;
    }


`;

export const Search = styled.div`
    grid-column: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media(max-width: 600px) {
        grid-column: unset;
        grid-row: 1;
    }
`;

export const SearchAndButton = styled.div`
@media(max-width: 600px) {
    display: flex;
}    

`

export const InputSearch = styled.input`
    border-radius: 20px;
    font-size: 14px;
    padding: 0 8px;
    height: 40px;
    width: 200px;
    margin-right: 5px;

    @media(max-width: 600px) {
        width: 200px;

    }  
`;

export const Paragraph = styled.p`
    color: var(--Dark-Grayish-Blue);
    font-size: 0.875rem;
`;
