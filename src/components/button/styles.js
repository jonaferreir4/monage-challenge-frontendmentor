import styled from "styled-components";
import { Link } from 'react-router-dom' 
export const StartButton = styled.button`
    color: ${props => props.color ? props.color : '#FFF'} ;
    font-weight: 700;
    background-color: ${(props) => props.bg || 'var(--primary-color)'};
    border: none;
    padding: 15px 40px;
    max-height: 45px;
    border-radius: 30px;
    @media (max-width: 330px) {
        padding: 10px 20px;
        
    }
    &:hover {
        opacity: 0.6;
    }
    
`

export const ButtonWrapper = styled(Link)`
    text-decoration: none;
`;
