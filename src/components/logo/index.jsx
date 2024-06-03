import React from "react"
import LogoIMG from '../../assets/images/logo.svg'
import { LogoAside, LogoImg } from "./styles"
export default function Logo(props) {
    return(
       <LogoAside >
            <a href="/">
                <LogoImg src={LogoIMG} alt="Logo" />
            </a>
       </LogoAside>
    )
}