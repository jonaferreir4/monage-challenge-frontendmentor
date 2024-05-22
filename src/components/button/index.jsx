import React from "react"
import { ButtonWrapper, StartButton } from "./styles"

export default function Button(props) {
    return (
        <ButtonWrapper to={props.to ? props.to : '/loginPage'} >
            <StartButton bg={props.bg} color={props.color}>
                {props.text ? props.text : 'Get Started'}
            </StartButton>
        </ButtonWrapper>
    )
}