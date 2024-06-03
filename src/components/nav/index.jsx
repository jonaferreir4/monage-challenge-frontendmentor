import React from "react";
import { TagAside, Bar, MainNav, NavLi, NavLink, MobileMenu, MobileNavLi, CloseButton } from "./styles";
import closeIcon from "../../assets/images/icon-close.svg";

const navLinks = [
    { label: "Pricing", href: "#" },
    { label: "Product", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Community", href: "#" }
];

export default function Nav({ isOpen, toggleMenu }) {
    return (
        <>
            <TagAside>
                <Bar>
                    <MainNav>
                        {navLinks.map(link => (
                            <NavLi key={link.label}>
                                <NavLink href={link.href}>{link.label}</NavLink>
                            </NavLi>
                        ))}
                    </MainNav>
                </Bar>
            </TagAside>
            {isOpen && (
                <MobileMenu>
                    <CloseButton onClick={toggleMenu}>
                        <img src={closeIcon} alt="Close menu" />
                    </CloseButton>
                    <MainNav>
                        {navLinks.map(link => (
                            <MobileNavLi key={link.label}>
                                <NavLink href={link.href} onClick={toggleMenu}>{link.label}</NavLink>
                            </MobileNavLi>
                        ))}
                    </MainNav>
                </MobileMenu>
            )}
        </>
    );
}
