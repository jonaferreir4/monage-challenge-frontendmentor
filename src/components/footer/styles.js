import styled from "styled-components";

export const TagFooter = styled.footer`
    display: flex;
    flex-direction: column;
`;

export const ContentFooter = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background-color: var(--very-dark-blue);
    padding: var(--padding-primary-page);
    color: #FFF;
`;

export const Message = styled.div`
    background-color: var(--primary-color);
    grid-row: 1;
    grid-column: span 3;
    display: grid;
    grid-template-columns: 1fr auto;
    padding: var(--padding-primary-page);
`;

export const MessageH1 = styled.h1`
    color: #FFF;
`;

export const LogoFooter = styled.div`
    grid-row: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const SocialMedia = styled.div`
    display: flex;
    margin-top: 10px;
`;

export const SocialMediaImg = styled.img`
    padding-right: 13px;
    &:hover {
        opacity: 0.8;
    }
`;

export const MoreInformations = styled.div`
    grid-row: 2;
`;

export const TagLi = styled.li`
    list-style-type: none;
    padding: 5px 0;
    &:hover {
        opacity: 0.8;
    }
`;

export const Search = styled.div`
    grid-row: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const InputSearch = styled.input`
    border-radius: 20px;
    font-size: 14px;
    padding: 0 8px;
    height: 40px;
    width: 200px;
    margin-right: 5px;
`;

export const Paragraph = styled.p`
    color: var(--Dark-Grayish-Blue);
    font-size: 14px;
`;
