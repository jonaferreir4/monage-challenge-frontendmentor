import styled from "styled-components";

export const TagAside = styled.aside`
  height: 100%;
`;

export const Bar = styled.nav`
  display: flex;
  height: 100%;
`;

export const MainNav = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    display: none;
    justify-content: flex-end;
  }
`;

export const NavLi = styled.li`
  display: flex;
  text-align: center;
  padding: 0 10px;
`;

export const NavLink = styled.a`
  color: var(--secondary-color);
  display: flex;
  font-size: 12px;
  font-weight: 700;
  &:hover {
    opacity: 0.8;
  }
  @media (min-width: 768px) {
    margin: 0px 10px;
  }
`;
