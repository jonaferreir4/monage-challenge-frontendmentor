import React from "react"
import LogoIMG from '../../assets/images/logo.svg'
import { LogoImg } from "./styles"
export default function Logo(props) {
    return(
       <aside>
            <a href="/">
                <LogoImg src={LogoIMG} alt="Logo" />
            </a>
       </aside>
    )
}