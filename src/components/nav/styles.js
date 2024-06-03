import styled from "styled-components";

export const TagAside = styled.aside`
    height: 100%;
`;

export const Bar = styled.nav`
    width: 600px;
    @media (max-width: 600px) {
        display: none;
    }
`;

export const MainNav = styled.ul`
    width: 100%;
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const NavLi = styled.li`
    display: flex;
    text-align: center;
`;

export const MobileNavLi = styled.li`
    margin: 20px 0;
`;

export const NavLink = styled.a`
    color: var(--secondary-color);
    display: flex;
    font-size: 0.75rem;
    font-weight: 700;
    &:hover {
        opacity: 0.8;
    }
    @media (min-width: 600px) {
        margin: 0 5%;
    }
`;

export const MobileMenu = styled.div`
    position: fixed;
    top: 1%;
    right: 1%;
    width: 60%;
    height: 60%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    cursor: pointer;
    img {
        width: 24px;
        height: 24px;
    }
`;
