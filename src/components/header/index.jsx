import React from "react";
import Logo from '../logo';
import Nav from '../nav/index';
import Button from "../button";
import { TagHeader } from "./styles";

export default function Header(props) {
    return (
        <TagHeader>
                <Logo />
                <Nav />
                <Button/>
        </TagHeader>
    );
}
