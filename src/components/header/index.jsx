import React, { useState } from "react";
import Logo from '../logo';
import Nav from '../nav/index';
import Button from "../button";
import { TagHeader, ButtonDiv, MenuToggle } from "./styles";

export default function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <TagHeader>
            <Logo />
            <Nav isOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <ButtonDiv>
                <Button />
            </ButtonDiv>
            <MenuToggle onClick={toggleMenu} />
        </TagHeader>
    );
}
