import React from "react";
import { TagAside, Bar, MainNav, NavLi, NavLink } from "./styles";

const navLinks = [
    { label: "Pricing", href: "#" },
    { label: "Product", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Community", href: "#" }
];

export default function Nav() {
    return (
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
    );
}
